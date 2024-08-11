import { selectUser } from 'src/redux/users/selectors.js';
import UserBar from './UserBar/UserBar.jsx';
import css from './UserPanel.module.css';
import { useSelector } from 'react-redux';
import Container from 'src/components/REUSABLE/Container/Container.jsx';

const UserPanel = () => {
  const user = useSelector(selectUser);

  return (
    <Container addClass={css.userPanelContainer}>
      <h2 className={css.title}>
        Hello
        {user?.name ? (
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
