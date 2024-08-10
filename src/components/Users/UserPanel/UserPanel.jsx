import { selectUser } from 'src/redux/users/selectors.js';
import css from './UserPanel.module.css';
import UserBar from './UserBar/UserBar.jsx';
import Container from 'src/components/REUSABLE/Container/Container.jsx';
import { useSelector } from 'react-redux';

const UserPanel = () => {
  const user = useSelector(selectUser);
  return (
    <Container addClass={css.userPanelContainer}>
      <h2 className={css.title}>
        Hello
        {user?.name !== null ? (
          <span className={css.span}>, {user.name}!</span>
        ) : (
          <span className={css.span}>, User!</span>
        )}
      </h2>
      <UserBar />
    </Container>
  );
};

export default UserPanel;
