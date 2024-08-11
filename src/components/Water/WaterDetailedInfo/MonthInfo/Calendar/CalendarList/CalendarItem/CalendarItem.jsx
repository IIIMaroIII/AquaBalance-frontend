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

export const CalendarItem = ({ day, activeDay, setActiveDay }) => {
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
          })}
          onClick={() => {
            setActiveDay(day);
            setChosenDay(day);
            dispatch(fetchMonthlyWater())
              .unwrap()
              .then(() => dispatch(fetchDailyWater()));
          }}
        >
          {day}
        </Button>
        <p className={css.text}>
          {dayWithRecord.includes(day) ? `${dailyPercentage}%` : '0%'}
        </p>
      </li>
    </>
  );
};

export default CalendarItem;
