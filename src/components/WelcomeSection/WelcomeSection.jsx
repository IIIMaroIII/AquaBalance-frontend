import css from './WelcomeSection.module.css';
import CustomNavLink from '../REUSABLE/CustomNavLink/CustomNavLink';
import Logo from '../REUSABLE/Logo/Logo';
import clsx from 'clsx';
import Container from '../REUSABLE/Container/Container.jsx';
import { useDispatch } from 'react-redux';
import { signUp } from 'src/redux/users/operations.js';
import Button from '../REUSABLE/Button/Button.jsx';
import useModals from 'src/hooks/useModals.js';

const WelcomeSection = () => {
  const dispatch = useDispatch();
  const { changeModal, modal } = useModals();
  return (
    //Container - переиспользуемый кастомный компонент, добавление классов через addClass
    //CustomNavLink - переиспользуемый кастомный компонент, добавление классов через addClass

    <Container type="section" addClass={css.container}>
      <Logo />
      <div>
        <p>Record daily water intake and track</p>
        <h1>Water consumption tracker</h1>
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
          <li className={clsx(css.item, css.signInItem)}>
            <Button
              onClick={() => dispatch(changeModal(!modal))}
              addClass={clsx(css.link, css.signInLink, {
                // [css.isActive]: isActive,
              })}
            >
              Set to Main Modal Open
            </Button>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default WelcomeSection;
