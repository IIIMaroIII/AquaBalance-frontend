// import css from '../DailyInfo/DailyInfo.module.css';
// import Button from 'src/components/REUSABLE/Button/Button.jsx';
import ChooseDate from './ChooseDate/ChooseDate.jsx';
import WaterList from './WaterList/WaterList.jsx';

const DailyInfo = () => {
  return (
    <>
      <ChooseDate />
      <WaterList />
    </>
  );
};

export default DailyInfo;
