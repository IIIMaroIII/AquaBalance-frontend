import css from './WaterDetailedInfo.module.css';
import UserPanel from 'src/components/Users/UserPanel/UserPanel.jsx';
import MonthInfo from './MonthInfo/MonthInfo.jsx';
import DailyInfo from './DailyInfo/DailyInfo.jsx';
import Container from 'src/components/REUSABLE/Container/Container.jsx';
import useAuth from 'src/hooks/useAuth.js';
import Loader from 'src/components/REUSABLE/Loader/Loader.jsx';

const WaterDetailedInfo = () => {
  const { isWaterLoading } = useAuth();
  return isWaterLoading ? (
    <>
      <Loader />
    </>
  ) : (
    <>
      <Container type="section" addClass={css.waterDetailedInfoContainer}>
        <UserPanel />
        <DailyInfo />
        <MonthInfo />
      </Container>
    </>
  );
};

export default WaterDetailedInfo;
