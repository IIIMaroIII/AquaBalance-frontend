import { useEffect, useRef } from 'react';
import css from './WaterProgressBar.module.css';
import { useSelector } from 'react-redux';
import { dailyNormaPercentage } from 'src/redux/water/selectors.js';

const WaterProgressBar = () => {
  const percentage = useSelector(dailyNormaPercentage(new Date().getDate()));
  const percent = useRef(0);

  if (percent.current === 0) {
    percent.current = percentage;
  }

  useEffect(() => {
    percent.current = percentage;
  }, [percentage]);

  const instantPercentUpd = () => {
    return percentage === 0 ? percent.current : percentage;
  };

  return (
    <div className={css.WaterProgressBar_container}>
      <h2 className={css.WaterProgressBar_h2}>Today</h2>
      <div className={css.WaterProgressBar}>
        <div
          className={css.progress}
          style={{
            width: `${instantPercentUpd()}%`,
          }}
        ></div>
        <div
          className={css.thumb}
          style={{
            left: `${instantPercentUpd()}%`,
          }}
        >
          <div className={css.thumb_value}>{`${instantPercentUpd()}%`}</div>
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
