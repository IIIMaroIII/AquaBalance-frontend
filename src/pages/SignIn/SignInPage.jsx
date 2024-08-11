import { useWindowSize } from 'react-use';

import Container from 'src/components/REUSABLE/Container/Container.jsx';
import SignInForm from 'src/components/Users/SignInForm/SignInForm.jsx';
import Logo from 'src/components/REUSABLE/Logo/Logo';
import CustomNavLink from 'src/components/REUSABLE/CustomNavLink/CustomNavLink';
import AdvantagesSection from 'src/components/AdvantagesSection/AdvantagesSection.jsx';

import css from './signInPage.module.css';

const SignInPage = () => {
  const { width } = useWindowSize();

  return (
    <Container type="div" addClass={css.signInPage}>
      <Container type="section" addClass={css.container}>
        <Logo addClass={css.logo} />
        <SignInForm />
        <p className={css.noAccountText}>
          Don't have an account?{' '}
          <CustomNavLink to="/signup" addClass={css.noAccountLink}>
            Sign Up
          </CustomNavLink>
        </p>
      </Container>
      {width >= 1440 ? <AdvantagesSection /> : null}
    </Container>
  );
};

export default SignInPage;
