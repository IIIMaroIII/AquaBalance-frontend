import { useWindowSize } from 'react-use';

import Container from 'src/components/REUSABLE/Container/Container.jsx';
import SignInForm from 'src/components/Users/SignInForm/SignInForm.jsx';
import CustomNavLink from 'src/components/REUSABLE/CustomNavLink/CustomNavLink';
import AdvantagesSection from 'src/components/AdvantagesSection/AdvantagesSection.jsx';

import css from './signInPage.module.css';
import LogoAndSwitchModeBtn from 'src/components/REUSABLE/LogoAndSwitchModeBtn/LogoAndSwitchModeBtn';

const SignInPage = () => {
  const { width } = useWindowSize();

  return (
    <Container type="div" addClass={css.signInPage}>
      <Container type="section" addClass={css.sectionContainer}>
        <Container addClass={css.signInPartContainer}>
          <LogoAndSwitchModeBtn addClass={css.logo} />
          <SignInForm />
          <p className={css.noAccountText}>
            Don&apos;t have an account?
            <CustomNavLink to="/signup" addClass={css.noAccountLink}>
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
