// import css from './WelcomeSection.module.css';
import CustomNavLink from '../REUSABLE/CustomNavLink/CustomNavLink';
import Logo from '../REUSABLE/Logo/Logo';
import clsx from 'clsx';
import Container from '../REUSABLE/Container/Container.jsx';
import { useDispatch } from 'react-redux';
import { signUp } from 'src/redux/users/operations.js';

const WelcomeSection = () => {
  const dispatch = useDispatch();
  return (
    //Container - переиспользуемый кастомный компонент, добавление классов через addClass
    //CustomNavLink - переиспользуемый кастомный компонент, добавление классов через addClass

    <Container type="section" addClass={''}>
      <Logo />
      {/* <button onClick={() => dispatch(signUp())}>Test Backend</button> */}
      <div className={''}>
        <p className={''}>Record daily water intake and track</p>
        <h1 className={''}>Water consumption tracker</h1>
        <ul className={''}>
          <li>
            <CustomNavLink
              addClass={clsx('', '', {
                // [css.isActive]: isActive,
              })}
              to="/signup"
            >
              Try tracker
            </CustomNavLink>
          </li>
          <li>
            <CustomNavLink
              addClass={clsx('', '', {
                // [css.isActive]: isActive,
              })}
              to="/signin"
            >
              Sign In
            </CustomNavLink>
          </li>
          {/* <li>
            <CustomNavLink
              addClass={clsx('', '', {
                // [css.isActive]: isActive,
              })}
              to="/tracker"
            >
              Tracker Page
            </CustomNavLink>
          </li> */}
        </ul>
      </div>
    </Container>
  );
};

export default WelcomeSection;
