import { useDispatch, useSelector } from 'react-redux';

import { getDaysInMonth } from 'date-fns';
import { selectDate } from 'src/redux/water/selectors.js';
import { setChosenDate } from 'src/redux/water/slice.js';

const useChosenDate = () => {
  const dispatch = useDispatch();
  const chosenDate = useSelector(selectDate);

  const changeMonth = (date, months) => {
    const resultDate = new Date(date);
    resultDate.setMonth(resultDate.getMonth() + months);
    return resultDate;
  };

  const setNewChosenDate = newDate => {
    dispatch(setChosenDate(formatLocalISO(newDate)));
  };

  const goToNextMonth = () => {
    if (chosenDate) {
      const nextMonth = changeMonth(chosenDate, 1);
      setNewChosenDate(nextMonth);
    }
  };

  const goToPreviousMonth = () => {
    if (chosenDate) {
      const prevMonth = changeMonth(chosenDate, -1);
      setNewChosenDate(prevMonth);
    }
  };

  const setChosenDay = newDay => {
    if (chosenDate) {
      const updatedDate = new Date(chosenDate);
      updatedDate.setDate(newDay);
      dispatch(setChosenDate(formatLocalISO(updatedDate)));
    }
  };

  const getDaysOfMonth = () => {
    if (chosenDate) {
      const date = new Date(chosenDate);
      const year = date.getFullYear();
      const month = date.getMonth();
      const daysInMonth = getDaysInMonth(new Date(year, month));
      return Array.from({ length: daysInMonth }, (_, index) => index + 1);
    }
    return [];
  };

  const formatLocalISO = date => {
    const tzOffset = -date.getTimezoneOffset();
    const diff = tzOffset >= 0 ? '+' : '-';
    const pad = num => (num < 10 ? '0' : '') + num;

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hour = pad(date.getHours());
    const minute = pad(date.getMinutes());
    const second = pad(date.getSeconds());
    const timezone = `${diff}${pad(Math.floor(Math.abs(tzOffset) / 60))}:${pad(
      Math.abs(tzOffset) % 60,
    )}`;

    return `${year}-${month}-${day}T${hour}:${minute}:${second}${timezone}`;
  };

  const getHoursAndMinutes = () => {
    if (chosenDate) {
      const date = new Date(chosenDate);
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return { hours, minutes };
    }
    return { hours: null, minutes: null };
  };

  const setHoursAndMinutes = (hours, minutes) => {
    if (chosenDate) {
      const updatedDate = new Date(chosenDate);
      updatedDate.setHours(hours);
      updatedDate.setMinutes(minutes);
      dispatch(setChosenDate(formatLocalISO(updatedDate)));
    }
  };

  return {
    getHoursAndMinutes,
    setHoursAndMinutes,
    chosenDate,
    getDaysOfMonth,
    setNewChosenDate,
    setChosenDay,
    goToPreviousMonth,
    goToNextMonth,
    formatLocalISO,
    chosenYear: chosenDate ? new Date(chosenDate).getFullYear() : null,
    chosenMonth: chosenDate ? new Date(chosenDate).getMonth() : null,
  };
};

export default useChosenDate;
