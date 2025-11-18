import css from './logoutModal.module.css';
import { useDispatch } from 'react-redux';
import { logout } from 'src/redux/users/operations';
import Button from 'src/components/REUSABLE/Button/Button.jsx';
import { changeModal } from 'src/redux/water/slice.js';

const LogoutModal = ({ ...otherProps }) => {
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(changeModal(false));
  };

  return (
    <div className={css.logoutModal}>
      <div className={css.logoutModalwrapper}>
        <div className={css.titleText}>
          <h2 className={css.title}>Log out</h2>
          <p className={css.text}>Do you really want to leave?</p>
        </div>

        <div className={css.btnWrap}>
          <Button
            addClass={css.btn}
            onClick={async () => {
              await dispatch(logout());
              dispatch(changeModal(false));
            }}
            {...otherProps}
          >
            Log out
          </Button>
          <Button
            addClass={css.cancelBtn}
            onClick={handleCancel}
            {...otherProps}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
