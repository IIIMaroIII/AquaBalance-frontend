import { useWindowSize } from 'react-use';

import SignUpForm from 'src/components/Users/SignUpForm/SignUpForm.jsx';
import Container from 'src/components/REUSABLE/Container/Container';
import Logo from 'src/components/REUSABLE/Logo/Logo';
import { Link } from 'react-router-dom';
import css from './SignUpPage.module.css';
import AdvantagesSection from 'src/components/AdvantagesSection/AdvantagesSection.jsx';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectDarkTheme } from 'src/redux/darkTheme/selectors';

const SignUpPage = () => {
  const { width } = useWindowSize();
  const theme = useSelector(selectDarkTheme);

  return (
    <Container type="div" addClass={css.signUpPage}>
      <Container
        type="section"
        addClass={clsx(css.sectionContainer, {
          [css.darkSectionContainer]: theme,
        })}
      >
        <Container addClass={css.signUpPartContainer}>
          <Logo addClass={css.logo} />
          <SignUpForm />
          <p
            className={clsx(css.haveAnAccountText, {
              [css.darkHaveAnAccountText]: theme,
            })}
          >
            Already have an account?{' '}
            <Link
              to="/signin"
              className={clsx(css.haveAnAccountLink, {
                [css.darkHaveAnAccountText]: theme,
              })}
            >
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
