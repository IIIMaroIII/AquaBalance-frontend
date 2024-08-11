import css from './WaterProgressBar.module.css';
import { useSelector } from 'react-redux';
import { convertDailyTotalVolumeToPercentage } from 'src/redux/water/selectors.js';

const WaterProgressBar = () => {
  const percentage = useSelector(convertDailyTotalVolumeToPercentage).toFixed(
    0,
  );

  return (
    <div className={css.WaterProgressBar_container}>
      <h2 className={css.WaterProgressBar_h2}>Today</h2>
      <div className={css.WaterProgressBar}>
        <div className={css.progress} style={{ width: `${percentage}%` }}></div>
        <div className={css.thumb} style={{ left: `${percentage}%` }}>
          <div className={css.thumb_value}>{`${percentage}%`}</div>
        </div>
      </div>
      <div className={css.progress_labels}>
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </div>
    </div>
  );
};

export default WaterProgressBar;
