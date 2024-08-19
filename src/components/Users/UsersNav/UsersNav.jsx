import CustomNavLink from 'src/components/REUSABLE/CustomNavLink/CustomNavLink.jsx';

const UsersNav = () => {
  return (
    <div>
      <CustomNavLink to="/signup">Sign Up</CustomNavLink>
      <CustomNavLink to="/signin">Sign In</CustomNavLink>
    </div>
  );
};

export default UsersNav;
