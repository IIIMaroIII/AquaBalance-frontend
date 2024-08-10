import css from './HomePage.module.css';
import WelcomeSection from 'src/components/WelcomeSection/WelcomeSection';
import AdvantagesSection from 'src/components/AdvantagesSection/AdvantagesSection';
import Container from 'src/components/REUSABLE/Container/Container';

const HomePage = () => {
  return (
    <Container type="section" addClass={css.container}>
      <WelcomeSection />
      <AdvantagesSection />
    </Container>
  );
};

export default HomePage;
