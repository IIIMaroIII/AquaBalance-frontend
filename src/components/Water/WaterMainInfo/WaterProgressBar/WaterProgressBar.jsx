import css from './WaterProgressBar.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from 'src/redux/users/selectors';


const WaterProgressBar = () => {
  // const user = useSelector(selectUser);
  // const progress = (user.consumed / user.dailyNorma) * 100;
  const progress = 20;
      return (
        <div className={css.WaterProgressBar_container}>
        <h2 className={css.WaterProgressBar_h2}>Today</h2>
        <div className={css.WaterProgressBar}>
          <div className={css.progress} style={{ width: `${progress}%` }}></div>

          <div className={css.thumb} style={{ left: `${progress}%` }}>
            <div className={css.thumb_value}>{`0%`}</div>
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
