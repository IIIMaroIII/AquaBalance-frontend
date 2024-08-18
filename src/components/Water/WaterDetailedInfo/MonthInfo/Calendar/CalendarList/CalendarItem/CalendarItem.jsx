import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../../../REUSABLE/Button/Button';
import css from './calendarItem.module.css';

import useChosenDate from 'src/hooks/useChosenDate.js';
import {
  fetchDailyWater,
  fetchMonthlyWater,
} from 'src/redux/water/operations.js';
import clsx from 'clsx';
import {
  dailyNormaPercentage,
  daysWithRecords,
} from 'src/redux/water/selectors.js';
import { selectDarkTheme } from 'src/redux/darkTheme/selectors';

export const CalendarItem = ({ day, activeDay, setActiveDay }) => {
  const theme = useSelector(selectDarkTheme)
  const dispatch = useDispatch();
  const { getChosenDay, setChosenDay } = useChosenDate();
  const dayWithRecord = useSelector(daysWithRecords);
  const dailyPercentage = useSelector(dailyNormaPercentage(day));

  return (
    <>
      <li className={css.item} id={day}>
        <Button
          id={day}
          addClass={clsx(css.btn, {
            [css.active]: activeDay === day || getChosenDay() === day,
            [css.done]: Number(dailyPercentage) === 100,
            [css.darkBtn]: theme
          })}
          onClick={() => {
            setActiveDay(day);
            setChosenDay(day);
            dispatch(fetchMonthlyWater());
            dispatch(fetchDailyWater());
          }}
        >
          {day}
        </Button>
        <p className={clsx(css.percentage, {[css.darkPercentage]: theme})}>
          {dayWithRecord.includes(day) ? `${dailyPercentage}%` : '0%'}
        </p>
      </li>
    </>
  );
};

export default CalendarItem;
