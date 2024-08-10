import { useWindowSize } from 'react-use';

import SignUpForm from 'src/components/Users/SignUpForm/SignUpForm.jsx';
import Container from 'src/components/REUSABLE/Container/Container';
import Logo from 'src/components/REUSABLE/Logo/Logo';
import { Link } from 'react-router-dom';
import css from './SignUpPage.module.css';
import AdvantagesSection from 'src/components/AdvantagesSection/AdvantagesSection.jsx';

const SignUpPage = () => {
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const { width } = useWindowSize();

  return (
    <Container type="section" addClass={css.signUpPage}>
      <div className={css.container}>
        <Logo addClass={css.logo} />
        <SignUpForm />
        <div className={css.haveAnAccountContainer}>
          <p className={css.haveAnAccountText}>
            Already have an account?{' '}
            <Link to="/signin" className={css.haveAnAccountLink}>
              Sign In
            </Link>
          </p>
        </div>
      </div>
      {width <= 1439 ? null : <AdvantagesSection />}
      {/* тут должен быть условный рендеринг для экранов от 1440px <AdvantagesSection /> */}
    </Container>
  );
};

export default SignUpPage;
