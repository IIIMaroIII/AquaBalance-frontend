import UsersSettingsForm from '../../UsersSettingsForm/UsersSettingsForm.jsx';
import css from './userSettingsModal.module.css';
import { useState } from 'react';

const UserSettingsModal = () => {
  return (
    <div className={css.apContainer}>
      <h2 className={css.apSetting}>Setting</h2>
      <UsersSettingsForm />
    </div>
  );
};

export default UserSettingsModal;
