import Button from 'src/components/REUSABLE/Button/Button.jsx';
// import css from './WaterItem.module.css';
import {
  changeDeleteWaterModalOpen,
  changeModal,
  changeWaterCardId,
  changeWaterModalEdit,
} from 'src/redux/water/slice';
import { useDispatch } from 'react-redux';

const WaterItem = ({ item }) => {
  const dispatch = useDispatch();

  const date = new Date(item.date);
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  const itemTime = date.toLocaleString('en-US', options);

  const checkVolume = () => {
    if (item.volume < 1000) return `${item.volume} ml`;
    if (item.volume >= 1000) return `${item.volume / 1000} L`;
  };

  return (
    <>
      <svg>
        <use href={'/sprite.svg#icon-glass'}></use>
      </svg>
      <div>
        <p>{checkVolume()}</p>
        <Button
          // addClass={css.button}
          onClick={() => {
            dispatch(changeWaterModalEdit(true));
            dispatch(changeModal(true));
            dispatch(changeWaterCardId(item._id));
          }}
        >
          <svg>
            <use href={'/sprite.svg#icon-pen'}></use>
          </svg>
        </Button>

        <p>{itemTime}</p>
        <Button
          // addClass={css.button}
          onClick={() => {
            dispatch(changeDeleteWaterModalOpen(true));
            dispatch(changeModal(true));
            dispatch(changeWaterCardId(item._id));
          }}
        >
          <svg>
            <use href={'/sprite.svg#icon-trash'}></use>
          </svg>
        </Button>
      </div>
    </>
  );
};

export default WaterItem;

// import Button from 'src/components/REUSABLE/Button/Button.jsx';
// import css from './WaterItem.module.css';
// import {
//   changeDeleteWaterModalOpen,
//   changeModal,
//   changeWaterCardId,
//   changeWaterModalEdit,
// } from 'src/redux/water/slice';
// import { useDispatch } from 'react-redux';

// const WaterItem = ({ item }) => {
//   const dispatch = useDispatch();

//   const date = new Date(item.date);
//   const options = {
//     hour: 'numeric',
//     minute: 'numeric',
//     hour12: true,
//   };
//   const itemTime = date.toLocaleString('en-US', options);

//   const checkVolume = () => {
//     if (item.volume < 1000) return `${item.volume} ml`;
//     if (item.volume >= 1000) return `${item.volume / 1000} L`;
//   };

//   return (
//     <>
//       <svg className={css.iconGlass}>
//         <use href={'/sprite.svg#icon-glass'}></use>
//       </svg>
//       <div className={css.wrapper}>
//         <p className={css.volume}>{checkVolume()}</p>
//         <Button
//           addClass={css.button}
//           onClick={() => {
//             dispatch(changeWaterModalEdit(true));
//             dispatch(changeModal(true));
//             dispatch(changeWaterCardId(item._id));
//           }}
//         >
//           <svg className={css.icon}>
//             <use href={'/sprite.svg#icon-pen'}></use>
//           </svg>
//         </Button>

//         <p className={css.itemTime}>{itemTime}</p>
//         <Button
//           addClass={css.button}
//           onClick={() => {
//             dispatch(changeDeleteWaterModalOpen(true));
//             dispatch(changeModal(true));
//             dispatch(changeWaterCardId(item._id));
//           }}
//         >
//           <svg className={css.icon}>
//             <use href={'/sprite.svg#icon-trash'}></use>
//           </svg>
//         </Button>
//       </div>
//     </>
//   );
// };

// export default WaterItem;
