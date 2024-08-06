import { parseISO } from 'date-fns';
import { useSelector } from 'react-redux';
import CONSTANTS from 'src/components/Constants/constants';
import { selectDate } from 'src/redux/water/selectors.js';
// import css from './chooseDate.module.css';

const ChooseDate = () => {
  const selectedDate = useSelector(selectDate);

  const ifToday = () => {
    const parsedDate = new Date(parseISO(selectedDate));
    const date = new Date();

    const formatedDate = date => {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();

      return `${year}/${month}/${day}`;
    };
    const chosenDay = CONSTANTS.DAYS[parsedDate.getDay()];
    return formatedDate(parsedDate) === formatedDate(date)
      ? 'Today'
      : `${parsedDate.getDate()}, ${chosenDay}`;
  };

  return <div>{ifToday()}</div>;
};

export default ChooseDate;
