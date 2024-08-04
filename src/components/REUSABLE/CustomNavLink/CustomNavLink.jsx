import { NavLink } from 'react-router-dom';
import css from './customNavLink.module.css';
import clsx from 'clsx';

const CustomNavLink = ({ addClass = '', children, ...otherProps }) => {
  const addClassName = ({ isActive }) => {
    if (!isActive) {
      return clsx(css.link, addClass);
    }
    return clsx(css.link, css.isActive, addClass);
  };

  return (
    <>
      {/* <NavLink className={props => addClassName(props)} {...otherProps}> */}
      <NavLink className={props => addClassName(props)} {...otherProps}>
        {children}
      </NavLink>
    </>
  );
};

export default CustomNavLink;

/*
Использование 

          <CustomNavLink
            addClass={clsx(css.homePageLinks, css.linkTracker, {
              [css.isActive]: isActive,
            })}
            to="/signup"
          >
            Try tracker  >>> children 
          </CustomNavLink>

*/
