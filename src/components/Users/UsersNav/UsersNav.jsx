import CustomNavLink from 'src/components/REUSABLE/CustomNavLink/CustomNavLink.jsx';
import css from './usersNav.module.css';

const UsersNav = () => {
  return (
    <div>
      <CustomNavLink to="/signup">Sign Up</CustomNavLink>
      <CustomNavLink to="/signin">Sign In</CustomNavLink>
    </div>
  );
};

export default UsersNav;
