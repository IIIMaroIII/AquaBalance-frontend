import CalendarList from './CalendarList/CalendarList';
import css from './calendar.module.css';

export const Calendar = () => {
  return <CalendarList addClass={css.datepicker} />;
};

export default Calendar;
