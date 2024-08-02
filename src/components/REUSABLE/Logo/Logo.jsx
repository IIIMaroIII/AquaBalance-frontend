import CustomNavLink from '../CustomNavLink/CustomNavLink';
import css from './logo.module.css';

const Logo = () => {
  return (
    <CustomNavLink className={css.homePageLogo} to="/">
      AquaTrack
    </CustomNavLink>
  );
};

export default Logo;
