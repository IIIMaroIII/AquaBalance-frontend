import SignUpForm from 'src/components/Users/SignUpForm/SignUpForm.jsx';
// import css from './SignUpPage.module.css';
import Container from 'src/components/REUSABLE/Container/Container';
import Logo from 'src/components/REUSABLE/Logo/Logo';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  return (
    <Container type="section" addClass={'wrapper'}>
      <Logo />
      <SignUpForm />
      <div>
        <p>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </Container>
  );
};

export default SignUpPage;
