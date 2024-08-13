import { useEffect, useRef, useState } from 'react';
import css from './WaterProgressBar.module.css';
import { useSelector } from 'react-redux';
import {
  dailyNormaPercentage,
  selectDate,
  selectWaterItems,
} from 'src/redux/water/selectors.js';
import { ifEqualDate } from 'src/utils/ifEqualDate';



const WaterProgressBar = () => {
  const percentage = useSelector(dailyNormaPercentage(new Date().getDate()));
  const waterItemns = useSelector(selectWaterItems);
  const percent = useRef(percentage);
  const [currentPercentage, setCurrentPercentage] = useState(percent.current);
  const chosenDate = useSelector(selectDate);

  useEffect(() => {
    if (percentage !== 0) {
      percent.current = percentage;
      setCurrentPercentage(percent.current);
    }

      if (ifEqualDate(chosenDate)) {
        if (waterItemns.length === 0) {
          setCurrentPercentage(0);
        }
      }
  }, [chosenDate, currentPercentage, percentage, waterItemns]);

  



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
          {(currentPercentage < 10) ? (<span>  </span>) : (<span>0%</span>)}
          {(35 < currentPercentage && currentPercentage < 65) ? (<span>   </span>) : (<span>50%</span>)}
          {(currentPercentage > 80) ? (<span>  </span>) : (<span>100%</span>)}
        </div>
      </div>
    );
};

export default WaterProgressBar;
