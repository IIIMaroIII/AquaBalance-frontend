import clsx from 'clsx';
import CustomNavLink from '../CustomNavLink/CustomNavLink';
import css from './logo.module.css';

const Logo = ({ addClass = '', ...otherProps }) => {
  return (
    <CustomNavLink
      className={clsx(css.homePageLogo, addClass)}
      {...otherProps}
      to="/"
    >
      AquaTrack
    </CustomNavLink>
  );
};

export default Logo;
