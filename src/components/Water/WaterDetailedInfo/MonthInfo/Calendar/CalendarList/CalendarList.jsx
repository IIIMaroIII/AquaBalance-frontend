import { useState } from 'react';
import CalendarItem from './CalendarItem/CalendarItem.jsx';
import css from './calendarList.module.css';
import useChosenDate from 'src/hooks/useChosenDate.js';

const CalendarList = () => {
  const { getDaysOfMonth, chosenMonth, chosenYear } = useChosenDate();
  const formattedMonth = `${chosenYear}-${String(chosenMonth + 1).padStart(
    2,
    '0',
  )}`;

  const [activeDay, setActiveDay] = useState(null);

  return (
    <ul className={css.list}>
      {getDaysOfMonth().map(day => {
        return (
          <CalendarItem
            activeDay={activeDay}
            setActiveDay={setActiveDay}
            key={day}
            day={day}
            month={formattedMonth}
          />
        );
      })}
    </ul>
  );
};

export default CalendarList;
