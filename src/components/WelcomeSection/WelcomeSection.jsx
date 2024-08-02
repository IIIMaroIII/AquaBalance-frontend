// import css from './WelcomeSection.module.css';
import CustomNavLink from '../REUSABLE/CustomNavLink/CustomNavLink';
import Logo from '../REUSABLE/Logo/Logo';
import clsx from 'clsx';
import Container from '../REUSABLE/Container/Container.jsx';

const WelcomeSection = () => {
  return (
    //Container - переиспользуемый кастомный компонент, добавление классов через addClass
    //CustomNavLink - переиспользуемый кастомный компонент, добавление классов через addClass

    <Container type="section" addClass={''}>
      <Logo />
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
        <li>
          <CustomNavLink
            addClass={clsx('', '', {
              // [css.isActive]: isActive,
            })}
            to="/tracker"
          >
            Tracker Page
          </CustomNavLink>
        </li>
      </ul>
    </Container>
  );
};

export default WelcomeSection;
