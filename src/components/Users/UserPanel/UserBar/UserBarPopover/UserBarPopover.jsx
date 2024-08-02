// import { CiSettings } from 'react-icons/ci';
// import { FiLogOut } from 'react-icons/fi';
import css from './UserBarPopover.module.css';
// import { useDispatch } from 'react-redux';
// import {
//   changeLogoutModalOpen,
//   changeModal,
//   changeUsersSettingsModalOpen,
// } from 'src/redux/water/slice';
// import Button from 'src/components/REUSABLE/Button/Button.jsx';

const UserBarPopover = () => {
  return (
    <ul className={css.popover_list}>
      <li>
        {/* <Button
          addClass={css.popover_btn}
          type="button"
          onClick={() => {
            dispatch(changeUsersSettingsModalOpen(true));
            dispatch(changeModal(true));
            onClose();
          }}
        >
          <CiSettings /> Settings
        </Button> */}
      </li>
      <li>
        {/* <Button
          addClass={css.popover_btn}
          type="button"
          onClick={() => {
            dispatch(changeLogoutModalOpen(true));
            dispatch(changeModal(true));
            onClose();
          }}
        >
          <FiLogOut /> Log out
        </Button> */}
      </li>
    </ul>
  );
};

export default UserBarPopover;
