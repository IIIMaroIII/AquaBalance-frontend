import { useSelector } from 'react-redux';
import { selectUser } from 'src/redux/users/selectors';
import css from './WaterDailyNorma.module.css';

const WaterDailyNorma = () => {
  const user = useSelector(selectUser);


  return (
    <div className={css.WaterDailyNorma_wrapper}>
      <p className={css.WaterDailyNorma}>
        {user?.dailyNorma ? `${user.dailyNorma}` : 1.8} L
      </p>
      <p className={css.WaterDailyNorma_text}>My daily intake</p>
    </div>
  );
};

export default WaterDailyNorma;
