import css from './UserBarPopover.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeLogoutModalOpen,
  changeModal,
  changeUsersSettingsModalOpen,
} from 'src/redux/water/slice';
import Button from 'src/components/REUSABLE/Button/Button.jsx';
import sprite from "../../../../../assets/sprite.svg"
import clsx from 'clsx';
import { selectDarkTheme } from 'src/redux/darkTheme/selectors';

const UserBarPopover = ({ onClose }) => {
  const theme = useSelector(selectDarkTheme)
  const dispatch = useDispatch();

  return (
    <ul className={clsx(css.popover_list, { [css.darkPopover_list]: theme })}>
      <li>
        <Button
          addClass={clsx(css.popover_btn, { [css.darkPopover_btn]: theme })}
          type="button"
          onClick={() => {
            dispatch(changeUsersSettingsModalOpen(true));
            dispatch(changeModal(true));
            onClose();
          }}
        >
          <svg
            className={clsx(css.popover_icon, {
              [css.darkPopover_icon]: theme,
            })}
          >
            <use xlinkHref={`${sprite}#icon-settings`}></use>
          </svg>
          Setting
        </Button>
      </li>
      <li>
        <Button
          addClass={clsx(css.popover_btn, { [css.darkPopover_btn]: theme })}
          type="button"
          onClick={() => {
            dispatch(changeLogoutModalOpen(true));
            dispatch(changeModal(true));
            onClose();
          }}
        >
          <svg
            className={clsx(css.popover_icon, {
              [css.darkPopover_icon]: theme,
            })}
          >
            <use xlinkHref={`${sprite}#icon-log-out`}></use>
          </svg>
          Log out
        </Button>
      </li>
    </ul>
  );
};

export default UserBarPopover;
