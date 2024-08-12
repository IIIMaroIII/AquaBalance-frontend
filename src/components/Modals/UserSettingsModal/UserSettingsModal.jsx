import useAuth from 'src/hooks/useAuth.js';
import css from './userSettingsModal.module.css';
import UsersSettingsForm from './UsersSettingsForm/UsersSettingsForm.jsx';
import Loader from 'src/components/REUSABLE/Loader/Loader.jsx';

const UserSettingsModal = () => {
  return (
    <div className={css.apContainer}>
      <h2 className={css.apSetting}>Setting</h2>
      <UsersSettingsForm />
    </div>
  );
};

export default UserSettingsModal;
