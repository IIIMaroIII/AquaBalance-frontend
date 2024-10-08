import { useWindowSize } from 'react-use';

import SignUpForm from 'src/components/Users/SignUpForm/SignUpForm.jsx';
import Container from 'src/components/REUSABLE/Container/Container';
import Logo from 'src/components/REUSABLE/Logo/Logo';
import { Link } from 'react-router-dom';
import css from './SignUpPage.module.css';
import AdvantagesSection from 'src/components/AdvantagesSection/AdvantagesSection.jsx';

const SignUpPage = () => {
  const { width } = useWindowSize();

  return (
    <Container type="div" addClass={css.signUpPage}>
      <Container type="section" addClass={css.sectionContainer}>
        <Container addClass={css.signUpPartContainer}>
          <Logo addClass={css.logo} />
          <SignUpForm />
          <p className={css.haveAnAccountText}>
            Already have an account?{' '}
            <Link to="/signin" className={css.haveAnAccountLink}>
              Sign In
            </Link>
          </p>
        </Container>
      </Container>
      {width >= 1440 ? <AdvantagesSection /> : null}
    </Container>
  );
};

export default SignUpPage;
