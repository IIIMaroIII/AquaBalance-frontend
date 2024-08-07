import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../../../REUSABLE/Button/Button';
import css from './calendarItem.module.css';

import useChosenDate from 'src/hooks/useChosenDate.js';
import { fetchDailyWater } from 'src/redux/water/operations.js';
import { convertDailyTotalVolumeToPercentage } from 'src/redux/water/selectors.js';


export const CalendarItem = ({ day }) => {
  const dispatch = useDispatch();
  const { setChosenDay } = useChosenDate();
  const percentage = useSelector(convertDailyTotalVolumeToPercentage).toFixed(
    0,
  );

  const items = document.querySelectorAll(`.${css.btn_item}`);

  const target = e => {
    const btn = e.currentTarget.children[0];
    btn.classList.add(`${css.active}`);

    items.forEach(item => {
      if (item.id !== e.currentTarget.id)
        item.classList.remove(`${css.active}`);
    });
  };


  return (
    <>
      <li className={css.item} id={day} onClick={target}>
        <Button
          id={day}
          addClass={css.btn_item}
          onClick={() => {
            setChosenDay(day);
            dispatch(fetchDailyWater());
          }}
        >
          {day}
        </Button>
        <p>{`${percentage}%`}</p>
      </li>
    </>
  );
};

export default CalendarItem;