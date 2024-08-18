import css from './TrackerPage.module.css';
import WaterDetailedInfo from 'src/components/Water/WaterDetailedInfo/WaterDetailedInfo.jsx';
import WaterMainInfo from 'src/components/Water/WaterMainInfo/WaterMainInfo.jsx';
import Container from 'src/components/REUSABLE/Container/Container.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDailyWater,
  fetchMonthlyWater,
} from 'src/redux/water/operations.js';
import { selectDarkTheme } from 'src/redux/darkTheme/selectors';
import clsx from 'clsx';

const TrackerPage = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectDarkTheme)

  useEffect(() => {
    (async () => {
        await Promise.all([
          dispatch(fetchDailyWater()).unwrap(),
          dispatch(fetchMonthlyWater()).unwrap(),
        ]);
    })();
  }, [dispatch]);

  return (
    <Container type="section">
      <div className={css.container}>
        <div className={css.mainInfo}>
          <WaterMainInfo />
        </div>
        <div className={clsx(css.detailedInfo, {[css.darkDetailedInfo]: theme})}>
          <WaterDetailedInfo />
        </div>
      </div>
    </Container>
  );
};

export default TrackerPage;
