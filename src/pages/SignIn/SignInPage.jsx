// import css from './signInPage.module.css';
import Container from 'src/components/REUSABLE/Container/Container.jsx';
import SignInForm from 'src/components/Users/SignInForm/SignInForm.jsx';
import Logo from 'src/components/REUSABLE/Logo/Logo';
import CustomNavLink from 'src/components/REUSABLE/CustomNavLink/CustomNavLink';

const SignInPage = () => {
  return (
    <Container type="section" addClass={'wrapper'}>
      <Logo />
      <SignInForm />
      <div>
        <p>
          Don't have an account? <CustomNavLink to="/signup">Sign Up</CustomNavLink>
        </p>
      </div>
    </Container>
  );
};

export default SignInPage;
