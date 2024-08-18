import css from './WelcomeSection.module.css';
import CustomNavLink from '../REUSABLE/CustomNavLink/CustomNavLink';
import Logo from '../REUSABLE/Logo/Logo';
import clsx from 'clsx';
import Container from '../REUSABLE/Container/Container.jsx';
import { useSelector } from 'react-redux';
import { selectDarkTheme } from 'src/redux/darkTheme/selectors';

const WelcomeSection = () => {
  const theme = useSelector(selectDarkTheme);

  return (
    //Container - переиспользуемый кастомный компонент, добавление классов через addClass
    //CustomNavLink - переиспользуемый кастомный компонент, добавление классов через addClass

    <Container
      type="section"
      addClass={clsx(css.sectionContainer, {
        [css.darkSectionContainer]: theme,
      })}
    >
      <Container type="div" addClass={css.container}>
        <Logo addClass={css.logo} />
        <div className={css.containerWithoutLogo}>
          <p className={clsx(css.text, { [css.darkText]: theme })}>
            Record daily water intake and track
          </p>
          <h1 className={css.title}>Water consumption tracker</h1>
          <ul className={css.list}>
            <li className={clsx(css.item, css.signUpItem)}>
              <CustomNavLink
                addClass={clsx(css.link, css.signUpLink, {
                  [css.darkLink]: theme,
                })}
                to="/signup"
              >
                Try tracker
              </CustomNavLink>
            </li>
            <li className={clsx(css.item, css.signInItem, {[css.darkSignInItem]: theme})}>
              <CustomNavLink
                addClass={clsx(css.link, css.signInLink, {
                  [css.darkLink]: theme,
                })}
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
