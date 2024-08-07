// import useModals from 'src/hooks/useModals.js';
// import css from './logoutModal.module.css';
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
    <div>
      <div>
        <h2>Log out</h2>
        <p>Do you really want to leave?</p>
        <div>
          <Button
            onClick={async () => {
              await dispatch(logout());
              dispatch(changeModal(false));
            }}
            {...otherProps}
          >
            Log out
          </Button>
          <Button onClick={handleCancel} {...otherProps}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
