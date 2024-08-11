import { useSelector } from 'react-redux';
import { selectUser } from 'src/redux/users/selectors';
import css from './WaterDailyNorma.module.css';
import { useEffect } from 'react';

const WaterDailyNorma = () => {
  const user = useSelector(selectUser);
  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  return (
    <div className={css.WaterDailyNorma_wrapper}>
      <p className={css.WaterDailyNorma}>
        {user?.dailyNorma ? `${user.dailyNorma}` : 1.8} L
      </p>
      <p className={css.WaterDailyNorma_text}>My daily norma</p>
    </div>
  );
};

export default WaterDailyNorma;
