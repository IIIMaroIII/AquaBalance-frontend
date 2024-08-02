// import css from './signInPage.module.css';
import Container from 'src/components/REUSABLE/Container/Container.jsx';
import SignInForm from 'src/components/Users/SignInForm/SignInForm.jsx';

const SignInPage = () => {
  return (
    <Container type="section" addClass={''}>
      <SignInForm />
    </Container>
  );
};

export default SignInPage;
