import Button from 'src/components/REUSABLE/Button/Button.jsx';
import css from './WaterItem.module.css';
import {
  changeDeleteWaterModalOpen,
  changeModal,
  changeWaterCardId,
  changeWaterModalEdit,
} from 'src/redux/water/slice';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'src/components/REUSABLE/Container/Container.jsx';
import useChosenDate from 'src/hooks/useChosenDate.js';
import sprite from "../../../../../../assets/sprite.svg"
import clsx from 'clsx';
import { selectDarkTheme } from 'src/redux/darkTheme/selectors';

const WaterItem = ({ item }) => {
  const dispatch = useDispatch();
  const theme = useSelector(selectDarkTheme)
  const { returnAmPmTime } = useChosenDate();
  
  return (
    <li key={item._id} className={clsx(css.item, { [css.darkItem]: theme })}>
      <svg className={css.iconGlass}>
        <use xlinkHref={`${sprite}#icon-cup`}></use>
      </svg>
      <Container addClass={css.dataWrapper}>
        <p className={clsx(css.volume, { [css.darkVolume]: theme })}>
          {item.volume < 1000 ? `${item.volume} ml` : `${item.volume / 1000} L`}
        </p>
        <p className={clsx(css.itemTime, { [css.darkItemTime]: theme })}>
          {returnAmPmTime(item.date)}
        </p>
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
          <svg className={clsx(css.icon, { [css.darkIcon]: theme })}>
            <use xlinkHref={`${sprite}#icon-edit`}></use>
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
          <svg className={clsx(css.icon, { [css.darkIcon]: theme })}>
            <use xlinkHref={`${sprite}#icon-delete`}></use>
          </svg>
        </Button>
      </Container>
    </li>
  );
};

export default WaterItem;
