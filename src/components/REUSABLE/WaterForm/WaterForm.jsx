import css from './waterForm.module.css';
import useModals from 'src/hooks/useModals.js';
import useChosenDate from 'src/hooks/useChosenDate.js';
import CustomInput from '../Input/CustomInput';
import Button from '../Button/Button';
// import { IoAddOutline } from 'react-icons/io5';
// import { IoRemoveOutline } from 'react-icons/io5';
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CONSTANTS from 'src/components/Constants/constants';
import {
  addWater,
  changeWater,
  fetchDailyWater,
} from 'src/redux/water/operations';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { waterModalFormValidation } from 'src/Validation/waterModalFormValidation';
import { toast } from 'react-hot-toast';
import sprite from '../../../assets/sprite.svg';
import {
  changeWaterModalAdd,
  changeWaterModalEdit,
  changeModal,
} from 'src/redux/water/slice';
import { selectWaterItems } from 'src/redux/water/selectors.js';

const WaterForm = ({ operationName }) => {
  const { chosenDate, getHoursAndMinutes, setHoursAndMinutes } =
    useChosenDate();
  const [waterAmount, setWaterAmount] = useState(50);
  const [waterAmountError, setWaterAmountError] = useState('');

  const dispatch = useDispatch();
  const waterItem = useSelector(selectWaterItems);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(waterModalFormValidation),
    defaultValues: {
      waterAmount: waterItem ? waterItem.volume : 50,
      time: `${getHoursAndMinutes().hours}:${getHoursAndMinutes().minutes}`,
    },
  });

  const addWaterValue = () => {
    if (waterAmount < CONSTANTS.WATER_LIMITS.MAX_WATER_LIMIT) {
      setWaterAmount(prevAmount => prevAmount + 50);
      setValue(
        'waterAmount',
        Math.min(waterAmount + 50, CONSTANTS.WATER_LIMITS.MAX_WATER_LIMIT),
      );
    }
  };

  const subtractWaterValue = () => {
    if (waterAmount > CONSTANTS.WATER_LIMITS.MIN_WATER_LIMIT) {
      setWaterAmount(prevAmount => prevAmount - 50);
      setValue(
        'waterAmount',
        Math.max(waterAmount - 50, CONSTANTS.WATER_LIMITS.MIN_WATER_LIMIT),
      );
    }
  };

  const onSubmit = async data => {
    const { waterAmount, time } = data;
    const formData = new FormData();
    formData.append('waterValue', waterAmount);

    const [hours, minutes] = time.split(':').map(Number);
    setHoursAndMinutes(hours, minutes);

    try {
      if (operationName === 'add') {
        await dispatch(addWater(formData)).then(res => {
          toast.success('You have successfully added the amount of water!');
          dispatch(changeWaterModalAdd(false));
          dispatch(changeModal(false));
          dispatch(fetchDailyWater());
        });
      } else {
        await dispatch(changeWater(formData)).then(res => {
          toast.success('You have successfully edited the amount of water!');
          dispatch(changeWaterModalEdit(false));
          dispatch(changeModal(false));
          dispatch(fetchDailyWater());
        });
      }
    } catch (error) {
      toast.error('There was an error processing your request.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className={css.amountText}>Amount of water:</p>
      <div className={css.changeAmountContainer}>
        <Button
          type="button"
          onClick={subtractWaterValue}
          disabled={waterAmount <= CONSTANTS.WATER_LIMITS.MIN_WATER_LIMIT}
          addClass={css.changeAmountButton}
        >
          <svg className={css.changeAmountIcon}>
            <use xlinkHref={`${sprite}#icon-minus`} />
          </svg>
        </Button>
        <p className={css.waterAmountText}>{waterAmount}</p>
        <Button
          type="button"
          onClick={addWaterValue}
          disabled={waterAmount >= CONSTANTS.WATER_LIMITS.MAX_WATER_LIMIT}
          addClass={css.changeAmountButton}
        >
          <svg className={css.changeAmountIcon}>
            <use xlinkHref={`${sprite}#icon-plus`} />
          </svg>
        </Button>
      </div>
      <Controller
        name="time"
        control={control}
        render={({ field }) => (
          <CustomInput
            label={true}
            labelName={'Recording time:'}
            labelClass={css.recordingTimeLabel}
            inputClass={css.input}
            value={field.value}
            onChange={e => {
              field.onChange(e);
              setValue('time', e.target.value);
            }}
            name={'date'}
          />
        )}
      />
      {errors.time && <p>{errors.time.message}</p>}
      <Controller
        name="waterAmount"
        control={control}
        render={({ field }) => (
          <CustomInput
            label={true}
            labelName={'Enter the value of the water used:'}
            labelClass={css.waterAmountLabel}
            inputClass={css.input}
            value={waterAmount}
            onChange={e => {
              const inputValue = e.target.value;
              if (/^\d*$/.test(inputValue)) {
                setWaterAmount(Number(inputValue));
                setWaterAmountError('');
                field.onChange(inputValue);
              } else {
                setWaterAmountError('Please enter a valid number.');
              }
            }}
            name={'volume'}
          />
        )}
      />
      {waterAmountError && <p>{waterAmountError}</p>}
      {errors.waterAmount && <p>{errors.waterAmount.message}</p>}
      <Button type="submit" addClass={css.saveButton}>
        Save
      </Button>
    </form>
  );
};

export default WaterForm;
