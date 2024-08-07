import useChosenDate from 'src/hooks/useChosenDate.js';

const ChooseDate = () => {
  const { checkIfToday } = useChosenDate();
  return <div>{checkIfToday()}</div>;
};

export default ChooseDate;
