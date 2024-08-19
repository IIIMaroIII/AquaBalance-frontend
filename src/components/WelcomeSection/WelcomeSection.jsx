import css from './WelcomeSection.module.css';
import CustomNavLink from '../REUSABLE/CustomNavLink/CustomNavLink';
import Logo from '../REUSABLE/Logo/Logo';
import clsx from 'clsx';
import Container from '../REUSABLE/Container/Container.jsx';
import LogoAndSwitchMode from '../REUSABLE/LogoAndSwitchMode/LogoAndSwitchMode';

const WelcomeSection = () => {
  return (
    //Container - переиспользуемый кастомный компонент, добавление классов через addClass
    //CustomNavLink - переиспользуемый кастомный компонент, добавление классов через addClass

    <Container type="section" addClass={css.sectionContainer}>
      <Container type="div" addClass={css.container}>
        <LogoAndSwitchMode />
        <div className={css.containerWithoutLogo}>
          <p className={css.text}>Record daily water intake and track</p>
          <h1 className={css.title}>Water consumption tracker</h1>
          <ul className={css.list}>
            <li className={clsx(css.item, css.signUpItem)}>
              <CustomNavLink
                addClass={clsx(css.link, css.signUpLink, {})}
                to="/signup"
              >
                Try tracker
              </CustomNavLink>
            </li>
            <li className={clsx(css.item, css.signInItem)}>
              <CustomNavLink
                addClass={clsx(css.link, css.signInLink, {})}
                to="/signin"
              >
                Sign In
              </CustomNavLink>
            </li>
          </ul>
        </div>
      </Container>
    </Container>
  );
};

export default WelcomeSection;
