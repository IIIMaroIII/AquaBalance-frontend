import css from './waterForm.module.css';
import useModals from 'src/hooks/useModals.js';
import useChosenDate from 'src/hooks/useChosenDate.js';
import CustomInput from '../Input/CustomInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CONSTANTS from 'src/components/Constants/constants';
import {
  addWater,
  changeWater,
  fetchDailyWater,
  fetchMonthlyWater,
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
import { selectChosenWaterCardId } from 'src/redux/water/selectors.js';
import clsx from 'clsx';

const WaterForm = ({ operationName }) => {
  const { getHoursAndMinutes, setHoursAndMinutes, chosenDate } =
    useChosenDate();

  const dispatch = useDispatch();
  const waterItems = useSelector(selectWaterItems);
  const itemID = useSelector(selectChosenWaterCardId);

  const currentWaterItem = waterItems.find(item => item._id === itemID);
  const currentWaterVolume = currentWaterItem?.volume || 50;
  const currentWaterTime = currentWaterItem?.date;

  const formatTime = (hours, minutes) => {
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  return `${formattedHours}:${formattedMinutes}`;
};

const initialTime =
  operationName === 'edit' && currentWaterTime
    ? formatTime(
        new Date(currentWaterTime).getHours(),
        new Date(currentWaterTime).getMinutes()
      )
    : formatTime(getHoursAndMinutes().hours, getHoursAndMinutes().minutes);


  const initialWaterAmount = operationName === 'edit' ? currentWaterVolume : 50;

  const [waterAmount, setWaterAmount] = useState(initialWaterAmount);
  const [waterAmountError, setWaterAmountError] = useState('');
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(waterModalFormValidation),
    defaultValues: {
      time: initialTime,
      waterAmount: initialWaterAmount,
    },
    mode: 'onChange',
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
        await dispatch(addWater(formData)).then(() => {
          dispatch(changeWaterModalAdd(false));
          dispatch(changeModal(false));
          dispatch(fetchMonthlyWater());
          dispatch(fetchDailyWater());
        });
      } else {
        await dispatch(changeWater(formData)).then(() => {
          dispatch(changeWaterModalEdit(false));
          dispatch(changeModal(false));
          dispatch(fetchMonthlyWater());
          dispatch(fetchDailyWater());
        });
      }
    } catch (error) {
      toast.error('There was an error processing your request.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
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
            inputClass={clsx(css.input, errors.time && css.inputError)}
            value={field.value}
            name={'date'}
            error={errors.time ? true : false}
            onChange={e => {
              field.onChange(e);
              setValue('time', e.target.value);
            }}/>
        )}
      />
      {errors.time && <p className={css.error}>{errors.time.message}</p>}
      <Controller
        name="waterAmount"
        control={control}
        render={({ field }) => (
          <CustomInput
            label={true}
            labelName={'Enter the value of the water used:'}
            inputType="number"
            labelClass={css.waterAmountLabel}
            inputClass={clsx(css.input, errors.waterAmount && css.inputError)}
            value={field.value}
            onChange={e => {
              const inputValue = e.target.value;           
                setWaterAmount(Number(inputValue));
                setWaterAmountError('');
                field.onChange(inputValue);             
            }}
            name={'volume'}
            error={errors.waterAmount ? true : false}
          />
        )}
      />
      {waterAmountError && <p className={css.error}>{waterAmountError}</p>}
      {errors.waterAmount && <p className={css.error}>{errors.waterAmount.message}</p>}
      <Button type="submit" addClass={css.saveButton}>
        Save
      </Button>
    </form>
  );
};

export default WaterForm;
