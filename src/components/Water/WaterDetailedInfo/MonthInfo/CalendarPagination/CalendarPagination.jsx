import Button from '../../../../../components/REUSABLE/Button/Button';
import { parseISO } from 'date-fns';
import useChosenDate from 'src/hooks/useChosenDate.js';
import monthAsName from 'src/utils/monthAsName.js';
import css from './calendarPagination.module.css';
import { useDispatch } from 'react-redux';
import {
  fetchDailyWater,
  fetchMonthlyWater,
} from 'src/redux/water/operations.js';
import sprite from '../../../../../assets/sprite.svg';
import clsx from 'clsx';

export const CalendarPagination = () => {
  const { chosenDate, goToPreviousMonth, goToNextMonth, chosenYear } =
    useChosenDate();
  const dispatch = useDispatch();
  const { month } = monthAsName(parseISO(chosenDate));

  return (
    <div className={css.wrapper}>
      <Button
        onClick={() => {
          goToPreviousMonth();
          dispatch(fetchMonthlyWater());
          dispatch(fetchDailyWater());
        }}
        addClass={css.btn}
      >
        <svg className={css.arrow}>
          <use xlinkHref={`${sprite}#icon-chevron-left`}></use>
        </svg>
      </Button>
      <span className={css.span}>{`${month}, ${chosenYear}`}</span>
      <Button
        onClick={() => {
          goToNextMonth();
          dispatch(fetchMonthlyWater());
          dispatch(fetchDailyWater());
        }}
        addClass={css.btn}
      >
        <svg className={clsx(css.arrow, css.right)}>
          <use xlinkHref={`${sprite}#icon-chevron-left`}></use>
        </svg>
      </Button>
    </div>
  );
};
export default CalendarPagination;
