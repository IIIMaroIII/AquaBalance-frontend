import css from './TrackerPage.module.css';
import WaterDetailedInfo from 'src/components/Water/WaterDetailedInfo/WaterDetailedInfo.jsx';
import WaterMainInfo from 'src/components/Water/WaterMainInfo/WaterMainInfo.jsx';
import Container from 'src/components/REUSABLE/Container/Container.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchDailyWater,
  fetchMonthlyWater,
} from 'src/redux/water/operations.js';

const TrackerPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDailyWater())
      .unwrap()
      .then(() => dispatch(fetchMonthlyWater()));
  }, [dispatch]);

  return (
    <Container type="section">
      <div className={css.container}>
        <div className={css.mainInfo}>
          <WaterMainInfo />
        </div>
        <div className={css.detailedInfo}>
          <WaterDetailedInfo />
        </div>
      </div>
    </Container>
  );
};

export default TrackerPage;
