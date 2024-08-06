import css from './WaterDailyNorma.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from 'src/redux/users/selectors';

const WaterDailyNorma = () => {
  const user = useSelector(selectUser);
  return (
    <div className={css.WaterDailyNorma_wrapper}>
      <p className={css.WaterDailyNorma}>{user.dailyNorma} L</p>
      <p className={css.WaterDailyNorma_text}>My daily norma</p>
    </div>
  );
};

export default WaterDailyNorma;
