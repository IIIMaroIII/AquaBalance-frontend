import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
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
          dispatch(fetchMonthlyWater())
            .unwrap()
            .then(() => dispatch(fetchDailyWater()))
            // .catch(console.error);
        }}
        addClass={css.btn}
      >
        <BsChevronLeft className={css.arrow} />
      </Button>
      <span className={css.span}>{`${month}, ${chosenYear}`}</span>
      <Button
        onClick={() => {
          goToNextMonth();
          dispatch(fetchMonthlyWater())
            .unwrap()
            .then(() => dispatch(fetchDailyWater()))
            // .catch(console.error);
        }}
        addClass={css.btn}
      >
        <BsChevronRight className={css.arrow} />
      </Button>
    </div>
  );
};
export default CalendarPagination;
