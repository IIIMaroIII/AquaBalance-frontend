import css from './waterForm.module.css';
import useModals from 'src/hooks/useModals.js';
import useChosenDate from 'src/hooks/useChosenDate.js';
import CustomInput from '../Input/CustomInput';
import Button from '../Button/Button';
import { IoAddOutline } from 'react-icons/io5';
import { IoRemoveOutline } from 'react-icons/io5';
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import CONSTANTS from 'src/components/Constants/constants';
import {
  addWater,
  changeWater,
  fetchDailyWater,
} from 'src/redux/water/operations';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import YupSchemas from 'src/Validation';
import { toast } from 'react-hot-toast';


const WaterForm = ({ operationName }) => {
  // const {} = useModals()
  const dispatch = useDispatch();
  const { chosenDate, getHoursAndMinutes } = useChosenDate();
  const [time, setTime] = useState(() => {
    const { hours, minutes } = getHoursAndMinutes();
    return `${hours}:${minutes}`;
  });
  const [waterAmount, setWaterAmount] = useState(50);

  const addWaterValue = () => {
    if (waterAmount < CONSTANTS.WATER_LIMITS.MAX_WATER_LIMIT) {
      setWaterAmount(prevAmount => prevAmount + 50);
    }
  };
  
  const subtractWaterValue = () => {
    if (waterAmount > CONSTANTS.WATER_LIMITS.MIN_WATER_LIMIT) {
      setWaterAmount(prevAmount => prevAmount - 50);
    }
  };

  const handleInputChange = (e) => {
    const newAmount = parseInt(e.target.value, 10);
    if (!isNaN(newAmount)) {
      setWaterAmount(newAmount);
    }
  };
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('volume', waterAmount);

    try {
      if (operationName === 'add') {
        await dispatch(addWater(formData)).then(res => {
          toast.success('You have successfully added amount of water!')
        });
      } else {
        await dispatch(changeWater(formData)).then(res => {
          toast.success('You have successfully edited amount of water!')
        });
      }
    } catch (error) {
      toast.error('There was an error processing your request.');
    }
  };

  return <>
    <form onSubmit={handleSubmit}>
      <p>Amount of water:</p>
      <Button
        type="button"
        onClick={subtractWaterValue}
        disabled={waterAmount <= CONSTANTS.WATER_LIMITS.MIN_WATER_LIMIT}>
        <IoRemoveOutline className="subtract-icon" size={16} />
      </Button>
      <p>{waterAmount}</p>
      <Button
        type="button"
        onClick={addWaterValue}
        disabled={waterAmount >= CONSTANTS.WATER_LIMITS.MAX_WATER_LIMIT}>
        <IoAddOutline className="add-icon" size={16} />
      </Button>
      <CustomInput
        label={true}
        labelName={"Recording time:"}
        value={time}
        onChange={handleTimeChange}>
      </CustomInput>
      <CustomInput
        label={true}
        labelName={"Enter the value of the water used:"}
        value={waterAmount}
        onChange={handleInputChange}
      >
      </CustomInput>
      <Button
        type="submit">
        Save
      </Button>
    </form>
  </>
};

export default WaterForm;
