import Button from 'src/components/REUSABLE/Button/Button.jsx';
import css from './WaterItem.module.css';
import {
  changeDeleteWaterModalOpen,
  changeModal,
  changeWaterCardId,
  changeWaterModalEdit,
} from 'src/redux/water/slice';
import { useDispatch } from 'react-redux';
import Container from 'src/components/REUSABLE/Container/Container.jsx';
import useChosenDate from 'src/hooks/useChosenDate.js';

const WaterItem = ({ item }) => {
  const dispatch = useDispatch();
  const { returnAmPmTime } = useChosenDate();

  return (
    <li key={item._id} className={css.item}>
      <svg className={css.iconGlass}>
        <use href={'/src/assets/sprite.svg#icon-cup'}></use>
      </svg>
      <Container addClass={css.dataWrapper}>
        <p className={css.volume}>
          {item.volume < 1000 ? `${item.volume} ml` : `${item.volume / 1000} L`}
        </p>
        <p className={css.itemTime}>{returnAmPmTime(item.date)}</p>
      </Container>

      <Container addClass={css.iconsWrapper}>
        <Button
          addClass={css.button}
          onClick={() => {
            dispatch(changeWaterModalEdit(true));
            dispatch(changeModal(true));
            dispatch(changeWaterCardId(item._id));
          }}
        >
          <svg className={css.icon}>
            <use href={'/src/assets/sprite.svg#icon-edit'}></use>
          </svg>
        </Button>

        <Button
          addClass={css.button}
          onClick={() => {
            dispatch(changeDeleteWaterModalOpen(true));
            dispatch(changeModal(true));
            dispatch(changeWaterCardId(item._id));
          }}
        >
          <svg className={css.icon}>
            <use href={'/src/assets/sprite.svg#icon-delete'}></use>
          </svg>
        </Button>
      </Container>
    </li>
  );
};

export default WaterItem;
