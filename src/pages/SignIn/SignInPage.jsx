import { useWindowSize } from 'react-use';

import Container from 'src/components/REUSABLE/Container/Container.jsx';
import SignInForm from 'src/components/Users/SignInForm/SignInForm.jsx';
import Logo from 'src/components/REUSABLE/Logo/Logo';
import CustomNavLink from 'src/components/REUSABLE/CustomNavLink/CustomNavLink';
import AdvantagesSection from 'src/components/AdvantagesSection/AdvantagesSection.jsx';

import clsx from 'clsx';

import css from './signInPage.module.css';
import { useSelector } from 'react-redux';
import { selectDarkTheme } from 'src/redux/darkTheme/selectors';

const SignInPage = () => {
  const { width } = useWindowSize();
  const theme = useSelector(selectDarkTheme);

  return (
    <Container type="div" addClass={css.signInPage}>
      <Container
        type="section"
        addClass={clsx(css.sectionContainer, {
          [css.darkSectionContainer]: theme,
        })}
      >
        <Container addClass={css.signInPartContainer}>
          <Logo addClass={css.logo} />
          <SignInForm />
          <p
            className={clsx(css.noAccountText, {
              [css.darkNoAccountText]: theme,
            })}
          >
            Don&apos;t have an account?
            <CustomNavLink
              to="/signup"
              addClass={clsx(css.noAccountLink, {
                [css.darkNoAccountLink]: theme,
              })}
            >
              Sign Up
            </CustomNavLink>
          </p>
        </Container>
      </Container>
      {width >= 1440 ? <AdvantagesSection /> : null}
    </Container>
  );
};

export default SignInPage;
