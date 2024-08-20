import css from './userSettingsModal.module.css';
import UsersSettingsForm from './UsersSettingsForm/UsersSettingsForm.jsx';

const UserSettingsModal = () => {
  return (
    <div className={css.apContainer}>
      <h2 className={css.apSetting}>Setting</h2>
      <UsersSettingsForm />
    </div>
  );
};

export default UserSettingsModal;
