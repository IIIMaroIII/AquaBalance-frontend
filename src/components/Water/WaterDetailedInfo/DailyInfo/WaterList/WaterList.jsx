import WaterItem from './WaterItem/WaterItem.jsx';
import css from '../WaterList/WaterList.module.css';
import { useSelector } from 'react-redux';
import { selectWaterItems } from 'src/redux/water/selectors.js';
import {} from 'src/redux/water/operations.js';
import { sortHrs } from 'src/utils/sortHrs.js';

const WaterList = () => {
  const dailyItems = useSelector(selectWaterItems);

  return (
    <ul className={css.list}>
      {!dailyItems?.length ? (
        <p className={css.p}>You do not have any records!</p>
      ) : (
        (() => {
          const sortedDailyItems = dailyItems
            .map(item => {
              return { item, time: sortHrs(item.date) };
            })
            .sort((a, b) => a.time.localeCompare(b.time));
          return sortedDailyItems.map(dailyItem => (
            <WaterItem key={dailyItem.item._id} item={dailyItem.item} />
          ));
        })()
      )}
    </ul>
  );
};

export default WaterList;

