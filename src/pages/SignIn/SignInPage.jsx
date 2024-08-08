// import css from './signInPage.module.css';
import Container from 'src/components/REUSABLE/Container/Container.jsx';
import SignInForm from 'src/components/Users/SignInForm/SignInForm.jsx';
import Logo from 'src/components/REUSABLE/Logo/Logo';
import CustomNavLink from 'src/components/REUSABLE/CustomNavLink/CustomNavLink';
import css from './signInPage.module.css';
// import AdvantagesSection from 'src/components/AdvantagesSection/AdvantagesSection.jsx';

const SignInPage = () => {
  return (
    <Container type="section">
      <div className={css.container}>
        <Logo />
        <SignInForm />
        <div className={css.noAccountContainer}>
          <p className={css.noAccountText}>
            Don't have an account?{' '}
            <CustomNavLink to="/signup" addClass={css.noAccountLink}>
              Sign Up
            </CustomNavLink>
          </p>
        </div>
      </div>
      {/* тут должен быть условный рендеринг для экранов от 1440px <AdvantagesSection /> */}
    </Container>
  );
};

export default SignInPage;
