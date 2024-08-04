import CalendarItem from './CalendarItem/CalendarItem.jsx';
import css from './calendarList.module.css';
import useChosenDate from 'src/hooks/useChosenDate.js';

const CalendarList = () => {
  const { getDaysOfMonth,  chosenMonth, chosenYear } = useChosenDate();
  const formattedMonth = `${chosenYear}-${String(chosenMonth + 1).padStart(2, '0')}`;

  return (
    <ul className={css.list}>
      {getDaysOfMonth().map(day => {
        return <CalendarItem key={day} day={day} month={formattedMonth} />;
      })}
    </ul>
  );
};

export default CalendarList;
