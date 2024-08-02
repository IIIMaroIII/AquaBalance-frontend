// import css from '../WaterList/WaterList.module.css';
import WaterItem from './WaterItem/WaterItem.jsx';

const WaterList = () => {
  return (
    <ul className={''}>
      <p className={''}>You do not have any records!</p>

      {[].map(item => {
        return (
          <li key={item._id} className={''}>
            <WaterItem item={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default WaterList;
