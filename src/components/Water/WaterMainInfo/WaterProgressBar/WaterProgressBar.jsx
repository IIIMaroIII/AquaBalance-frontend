import { useRef } from 'react';
import css from './WaterProgressBar.module.css';
import { useSelector } from 'react-redux';
import { dailyNormaPercentage } from 'src/redux/water/selectors.js';

const WaterProgressBar = () => {
  const percentage = useSelector(dailyNormaPercentage(new Date().getDate()));
  const ref = useRef(percentage);
  console.log('ref :>> ', ref);

  if (ref.current === 0) ref.current = percentage;

  return (
    <div className={css.WaterProgressBar_container}>
      <h2 className={css.WaterProgressBar_h2}>Today</h2>
      <div className={css.WaterProgressBar}>
        <div
          className={css.progress}
          style={{ width: `${ref.current}%` }}
        ></div>
        <div className={css.thumb} style={{ left: `${ref.current}%` }}>
          <div className={css.thumb_value}>{`${ref.current}%`}</div>
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
