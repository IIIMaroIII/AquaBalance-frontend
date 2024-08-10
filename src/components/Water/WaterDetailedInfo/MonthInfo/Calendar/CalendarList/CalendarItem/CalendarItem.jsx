import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../../../REUSABLE/Button/Button';
import css from './calendarItem.module.css';

import useChosenDate from 'src/hooks/useChosenDate.js';
import { fetchDailyWater } from 'src/redux/water/operations.js';
import clsx from 'clsx';
import { convertDailyTotalVolumeToPercentage } from 'src/redux/water/selectors.js';

export const CalendarItem = ({ day, activeDay, setActiveDay }) => {
  const dispatch = useDispatch();
  const { setChosenDay } = useChosenDate();
  const percentage = useSelector(convertDailyTotalVolumeToPercentage).toFixed(
    0,
  );


  return (
    <>
      <li className={css.item} id={day}>
        <Button
          id={day}
          addClass={clsx(css.btn, { [css.active]: activeDay === day })}
          onClick={() => {
            setActiveDay(day);
            setChosenDay(day);
            dispatch(fetchDailyWater());
          }}
        >
          {day}
        </Button>
        <p className={css.text}>{`${percentage}%`}</p>
      </li>
    </>
  );
};

export default CalendarItem;
