import css from './WelcomeSection.module.css';
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

    <Container type="section" addClass={css.container}>
      <Logo />
      <button onClick={() => dispatch(signUp())} className={css.buttonTestBackend}>Test Backend</button>
      <ul className={css.list}>
        <li className={clsx(css.item, css.signUpItem)}>
          <CustomNavLink
            addClass={clsx(css.link, css.signUpLink, {
              // [css.isActive]: isActive,
            })}
            to="/signup"
          >
            Try tracker
          </CustomNavLink>
        </li>
        <li className={clsx(css.item, css.signInItem)}>
          <CustomNavLink
            addClass={clsx(css.link, css.signInLink, {
              // [css.isActive]: isActive,
            })}
            to="/signin"
          >
            Sign In
          </CustomNavLink>
        </li>
        <li className={clsx(css.item, css.signInItem)}>
          <CustomNavLink
            addClass={clsx(css.link, css.signInLink, {
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
