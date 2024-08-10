import { useState, useRef } from 'react';
import css from './waterForm.module.css';
import { useForm, Controller } from 'react-hook-form';
import { IoAddOutline } from 'react-icons/io5';
import { IoRemoveOutline } from 'react-icons/io5';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../Button/Button';
import waterSchemas from 'src/Validation/Water/waterSchemas';
import CONSTANTS from 'src/components/Constants/constants';
import { useDispatch } from 'react-redux';
import {
  addWater,
  changeWater,
  fetchDailyWater,
} from 'src/redux/water/operations';
import { toast } from 'react-hot-toast';
import useChosenDate from 'src/hooks/useChosenDate.js';
import { changeModal } from 'src/redux/water/slice.js';

const WaterForm = ({ operationName }) => {
  const { chosenDate, getHoursAndMinutes } = useChosenDate();
  const { hours, minutes } = getHoursAndMinutes();
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(50);
  const buttonAddWater = useRef(null);
  const buttonSubtractWater = useRef(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { isDirty, errors },
    setValue,
    control,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(waterSchemas.waterTemplateSchema),
    defaultValues: {
      waterValue: 50,
    },
  });

  let waterAmount = watch('waterValue', 50);

  const onSubmit = async data => {
    const { waterValue } = data;
    if (Object.keys(errors).length > 0) {
      toast.error('Please fix the errors before submitting.');
      return;
    }

    if (waterValue === undefined || waterValue === null) {
      return;
    }

    const formData = new FormData();
    formData.append('waterValue', waterValue);

    if (operationName === 'add') {
      await dispatch(addWater(formData))
        .unwrap()
        .then(res => {
          toast.success('You have successfully added your record');
          console.log('res addWater fulfilled', res);
          dispatch(changeModal(false));
          dispatch(fetchDailyWater());
        });
    } else {
      await dispatch(changeWater(formData))
        .unwrap()
        .then(res => {
          console.log('res in editWater fulfilled', res);
          toast.success(
            'You have successfully changed water amount in your record',
          );
          dispatch(changeModal(false));
          dispatch(fetchDailyWater());
        });
    }
  };

  const addWaterAmount = () => {
    let result = (waterAmount += amount);
    buttonSubtractWater.current.disabled = false;
    if (result >= CONSTANTS.WATER_LIMITS.MAX_WATER_LIMIT) {
      buttonAddWater.current.disabled = true;
    }
    setValue('waterValue', result);
  };

  const reduceWater = () => {
    let result = (waterAmount -= amount);
    buttonAddWater.current.disabled = false;
    if (result <= CONSTANTS.WATER_LIMITS.MIN_WATER_LIMIT) {
      buttonSubtractWater.current.disabled = true;
    }
    setValue('waterValue', result);
  };

  function round(number) {
    if (number >= 1000) {
      let liters = number / 1000;
      if (number % 1000 === 0) {
        return `${liters.toFixed(0)}L`;
      } else {
        return `${liters.toFixed(3)}L`;
      }
    } else {
      return `${number}ml`;
    }
  }

  const handleWaterValueChange = evt => {
    const value = Number(evt.currentTarget.value);
    setValue('waterValue', isNaN(value) ? 0 : value);
    if (value >= CONSTANTS.WATER_LIMITS.MAX_WATER_LIMIT) {
      buttonSubtractWater.current.disabled = false;
      buttonAddWater.current.disabled = true;
    } else {
      buttonAddWater.current.disabled = false;
    }
    if (value === 0) {
      buttonSubtractWater.current.disabled = true;
      buttonAddWater.current.disabled = true;
    }
    setAmount(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.waterControlContainer}>
          <p>Amount of water:</p>
          <div className={css.waterAdjustmentContainer}>
            <button
              type="button"
              onClick={reduceWater}
              className={css.waterAdjustmentBtn}
              ref={buttonSubtractWater}
            >
              <IoRemoveOutline className="subtract-icon" size={16} />
            </button>
            <div className={css.waterAmount}>
              <p className={css.waterAmountDisplay}>{round(waterAmount)}</p>
            </div>
            <button
              type="button"
              className={css.waterAdjustmentBtn}
              onClick={addWaterAmount}
              ref={buttonAddWater}
            >
              <IoAddOutline className="add-icon" size={16} />
            </button>
          </div>
        </div>
        <div className={css.waterInfoContainer}>
          <label className={css.recordingTimeContainer}>
            Recording time:
            <input
              value={`${hours}:${minutes}`}
              {...register('time')}
              className={css.waterInfoField}
            />
            {errors.time && <p>{errors.time.message}</p>}
          </label>
          <label
            className={`${css.recordingTimeContainer} ${css.waterAmountText}`}
          >
            Enter the value of the water used:
            <Controller
              name="waterValue"
              control={control}
              defaultValue={50}
              render={({ field }) => (
                <input
                  id="waterValue"
                  value={waterAmount}
                  onChange={handleWaterValueChange}
                  className={css.waterInfoField}
                />
              )}
            />
            {errors.waterValue && <p>{errors.waterValue.message}</p>}
          </label>
        </div>
        <Button className={css.saveBtn} type="submit" onClick={onSubmit}>
          {/* Save */}
          {operationName === 'edit' ? 'Update Save' : 'Save'}
        </Button>
      </form>
    </div>
  );
};

export default WaterForm;