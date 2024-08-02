// import css from './calendarList.module.css';
import CalendarItem from './CalendarItem/CalendarItem.jsx';
// import useChosenDate from 'src/hooks/useChosenDate.js';

const CalendarList = () => {
  // const { getDaysOfMonth,  chosenMonth, chosenYear } = useChosenDate();
  // const formattedMonth = `${chosenYear}-${String(chosenMonth + 1).padStart(2, '0')}`;

  return (
    <ul className={''}>
      {[1, 2, 3, 4, 5].map(day => {
        return <CalendarItem key={day} day={''} month={''} />;
      })}
    </ul>
  );
};

export default CalendarList;
