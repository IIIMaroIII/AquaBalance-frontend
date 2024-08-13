import { useEffect, useRef, useState } from 'react';
import css from './WaterProgressBar.module.css';
import { useSelector } from 'react-redux';
import { dailyNormaPercentage } from 'src/redux/water/selectors.js';

const WaterProgressBar = () => {
  const percentage = useSelector(dailyNormaPercentage(new Date().getDate()));
  const percent = useRef(percentage);
  const [currentPercentage, setCurrentPercentage] = useState(percent.current);

  useEffect(() => {
    if (percentage !== 0) {
      percent.current = percentage;
      setCurrentPercentage(percent.current);
    }
  }, [percentage]);
  

  return (
    <div className={css.WaterProgressBar_container}>
      <h2 className={css.WaterProgressBar_h2}>Today</h2>
      <div className={css.WaterProgressBar}>
        <div
          className={css.progress}
          style={{
            width: `${currentPercentage}%`,
          }}
        ></div>
        <div
          className={css.thumb}
          style={{
            left: `${currentPercentage}%`,
          }}
        >
          <div className={css.thumb_value}>{`${currentPercentage}%`}</div>
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
