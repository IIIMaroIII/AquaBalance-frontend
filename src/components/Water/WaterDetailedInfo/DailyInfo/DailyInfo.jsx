import Button from 'src/components/REUSABLE/Button/Button.jsx';
import ChooseDate from './ChooseDate/ChooseDate.jsx';
import WaterList from './WaterList/WaterList.jsx';
// import css from '../DailyInfo/DailyInfo.module.css';
import { FaPlus } from 'react-icons/fa6';
import { changeModal, changeWaterModalAdd } from 'src/redux/water/slice.js';
import { useDispatch } from 'react-redux';

const DailyInfo = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <ChooseDate />
        <Button
          // addClass={css.btn}
          onClick={() => {
            dispatch(changeWaterModalAdd(true));
            dispatch(changeModal(true));
          }}
        >
          <FaPlus />
          <span>Add water</span>
        </Button>
      </div>
      <WaterList />
    </div>
  );
};

export default DailyInfo;

// import Button from 'src/components/REUSABLE/Button/Button.jsx';
// import ChooseDate from './ChooseDate/ChooseDate.jsx';
// import WaterList from './WaterList/WaterList.jsx';
// import css from '../DailyInfo/DailyInfo.module.css';
// import { FaPlus } from 'react-icons/fa6';
// import { changeModal, changeWaterModalAdd } from 'src/redux/water/slice.js';
// import { useDispatch } from 'react-redux';

// const DailyInfo = () => {
//   const dispatch = useDispatch();
//   return (
//     <div className={css.container}>
//       <div className={css.todayLine}>
//         <ChooseDate />
//         <Button
//           addClass={css.btn}
//           onClick={() => {
//             dispatch(changeWaterModalAdd(true));
//             dispatch(changeModal(true));
//           }}
//         >
//           <FaPlus className={css.plusIcon} />
//           <span className={css.btnSpan}>Add water</span>
//         </Button>
//       </div>
//       <WaterList />
//     </div>
//   );
// };

// export default DailyInfo;
