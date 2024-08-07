import Button from 'src/components/REUSABLE/Button/Button.jsx';
// import css from './WaterItem.module.css';
import {
  changeDeleteWaterModalOpen,
  changeModal,
  changeWaterCardId,
  changeWaterModalEdit,
} from 'src/redux/water/slice';
import { useDispatch } from 'react-redux';
import useChosenDate from 'src/hooks/useChosenDate.js';

const WaterItem = ({ item }) => {
  const dispatch = useDispatch();
  const { returnAmPmTime } = useChosenDate();

  const checkVolume = () => {
    if (item.volume < 1000) return `${item.volume} ml`;
    if (item.volume >= 1000) return `${item.volume / 1000} L`;
  };

  return (
    <>
      <svg>
        <use href={'/src/assets/sprite.svg#icon-cup'}></use>
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
            <use href={'/src/assets/sprite.svg#icon-edit'}></use>
          </svg>
        </Button>

        <p>{returnAmPmTime(item.date)}</p>
        <Button
          // addClass={css.button}
          onClick={() => {
            dispatch(changeDeleteWaterModalOpen(true));
            dispatch(changeModal(true));
            dispatch(changeWaterCardId(item._id));
          }}
        >
          <svg>
            {' '}
            <use href={'/src/assets/sprite.svg#icon-delete'}></use>
          </svg>
        </Button>
      </div>
    </>
  );
};

export default WaterItem;
