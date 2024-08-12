import css from './UserBarPopover.module.css';
import { useDispatch } from 'react-redux';
import {
  changeLogoutModalOpen,
  changeModal,
  changeUsersSettingsModalOpen,
} from 'src/redux/water/slice';
import Button from 'src/components/REUSABLE/Button/Button.jsx';

const UserBarPopover = ({ onClose }) => {
  const dispatch = useDispatch();

  return (
    <ul className={css.popover_list}>
      <li>
        <Button
          addClass={css.popover_btn}
          type="button"
          onClick={() => {
            dispatch(changeUsersSettingsModalOpen(true));
            dispatch(changeModal(true));
            onClose();
          }}
        >
          <svg className={css.popover_icon}>
            <use href={'/src/assets/sprite.svg#icon-settings'}></use>
          </svg>
          Setting
        </Button>
      </li>
      <li>
        <Button
          addClass={css.popover_btn}
          type="button"
          onClick={() => {
            dispatch(changeLogoutModalOpen(true));
            dispatch(changeModal(true));
            onClose();
          }}
        >
          <svg className={css.popover_icon}>
            <use href={'/src/assets/sprite.svg#icon-log-out'}></use>
          </svg>
          Log out
        </Button>
      </li>
    </ul>
  );
};

export default UserBarPopover;
