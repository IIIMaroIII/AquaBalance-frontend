import WaterItem from './WaterItem/WaterItem.jsx';
// import css from '../WaterList/WaterList.module.css';
import { useSelector } from 'react-redux';
import { selectWaterItems } from 'src/redux/water/selectors.js';
import {} from 'src/redux/water/operations.js';

const WaterList = () => {
  const dailyItems = useSelector(selectWaterItems);

  return (
    <ul>
      {!dailyItems?.length ? (
        <p>You do not have any records!</p>
      ) : (
        dailyItems.map(item => {
          return (
            <li key={item._id}>
              <WaterItem item={item} />
            </li>
          );
        })
      )}
    </ul>
  );
};

export default WaterList;

// import WaterItem from './WaterItem/WaterItem.jsx';
// import css from '../WaterList/WaterList.module.css';
// import { useSelector } from 'react-redux';
// import { selectWaterItems } from 'src/redux/water/selectors.js';
// import {} from 'src/redux/water/operations.js';

// const WaterList = () => {
//   const dailyItems = useSelector(selectWaterItems);

//   return (
//     <ul className={css.list}>
//       {!dailyItems?.length ? (
//         <p className={css.p}>You do not have any records!</p>
//       ) : (
//         dailyItems.map(item => {
//           return (
//             <li key={item._id} className={css.item}>
//               <WaterItem item={item} />
//             </li>
//           );
//         })
//       )}
//     </ul>
//   );
// };

// export default WaterList;
