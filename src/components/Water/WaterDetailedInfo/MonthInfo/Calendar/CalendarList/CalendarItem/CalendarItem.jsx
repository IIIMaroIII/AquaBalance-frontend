// import css from './calendarItem.module.css';
import Button from 'src/components/REUSABLE/Button/Button.jsx';

// import useChosenDate from 'src/hooks/useChosenDate.js';

export const CalendarItem = ({ day = 1 }) => {
  // const { setChosenDay } = useChosenDate();

  return (
    <>
      <li className={''} id={day} onClick={() => {}}>
        <Button id={day} addClass={''} onClick={() => {}}>
          {day}
        </Button>
        <p>{`%`}</p>
      </li>
    </>
  );
};

export default CalendarItem;
