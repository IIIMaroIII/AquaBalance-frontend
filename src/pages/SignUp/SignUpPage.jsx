import SignUpForm from 'src/components/Users/SignUpForm/SignUpForm.jsx';
import css from './SignUpPage.module.css';
import Container from 'src/components/REUSABLE/Container/Container';

const SignUpPage = () => {
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  return (
    <Container type="section" addClass={''}>
      <SignUpForm />
    </Container>
  );
};

export default SignUpPage;
