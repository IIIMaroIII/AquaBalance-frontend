import css from './userSettingsModal.module.css';
import Container from 'src/components/REUSABLE/Container/Container.jsx';
import UsersSettingsForm from './UsersSettingsForm/UsersSettingsForm.jsx';
// import useModals from 'src/hooks/useModals.js';

const UserSettingsModal = () => {
  // const { } = useModals()

  return (
    <Container type="section" addClass={''}>
      <UsersSettingsForm />
    </Container>
  );
};

export default UserSettingsModal;
