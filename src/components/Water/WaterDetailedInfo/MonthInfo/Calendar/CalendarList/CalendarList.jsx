import { useState } from 'react';
import CalendarItem from './CalendarItem/CalendarItem.jsx';
import css from './calendarList.module.css';
import useChosenDate from 'src/hooks/useChosenDate.js';
import { useSelector } from 'react-redux';
import {
  dailyNormaPercentage,
  daysWithRecords,
  selectMonthlyWaterItems,
} from 'src/redux/water/selectors.js';
import { selectUserDailyNorma } from 'src/redux/users/selectors.js';

const CalendarList = () => {
  const [activeDay, setActiveDay] = useState(null);
  const { getDaysOfMonth, chosenMonth, chosenYear } = useChosenDate();
  const formattedMonth = `${chosenYear}-${String(chosenMonth + 1).padStart(
    2,
    '0',
  )}`;

  // const fn = day => {
  //   const arr = monthlyItems
  //     .filter(item => new Date(item.date).getDate() === day)
  //     .map(item => item.volume);

  //   const total = arr.reduce((acc, num) => acc + num, 0);

  //   const percent = (total / (dailyNorma * 1000)) * 100;

  //   if (isNaN(percent)) {
  //     return 0;
  //   } else {
  //     return Math.min(percent, 100).toFixed(0);
  //   }
  // };


  return (
    <ul className={css.list}>
      {getDaysOfMonth().map(day => {
        return (
          <CalendarItem
            // percentage={daysWithRecord.includes(day) ? dailyPercent(day) : 0}
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
