import useChosenDate from 'src/hooks/useChosenDate.js';
import css from './chooseDate.module.css';

const ChooseDate = () => {
  const { checkIfToday } = useChosenDate();
  return <div className={css.day}>{checkIfToday()}</div>;
};

export default ChooseDate;
