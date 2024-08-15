import WaterItem from './WaterItem/WaterItem.jsx';
import css from '../WaterList/WaterList.module.css';
import { useSelector } from 'react-redux';
import { selectWaterItems } from 'src/redux/water/selectors.js';
import {} from 'src/redux/water/operations.js';

const WaterList = () => {
  const dailyItems = useSelector(selectWaterItems);

  return (
    <ul className={css.list}>
      {!dailyItems?.length ? (
        <p className={css.p}>You do not have any records!</p>
      ) : (
        (() => {
          const sortedDailyItems = dailyItems
            .map(item => item)
            .sort((a, b) => a.date.localeCompare(b.date));

          return sortedDailyItems.map(dailyItem => (
            <WaterItem key={dailyItem._id} item={dailyItem} />
          ));
        })()
      )}
    </ul>
  );
};

export default WaterList;
