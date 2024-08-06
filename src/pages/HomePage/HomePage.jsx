/* eslint-disable no-unused-vars */
import css from './HomePage.module.css';
import WelcomeSection from 'src/components/WelcomeSection/WelcomeSection';
import AdvantagesSection from 'src/components/AdvantagesSection/AdvantagesSection';
import Container from 'src/components/REUSABLE/Container/Container';
import UserSettingsModal from 'src/components/Modals/UserSettingsModal/UserSettingsModal';

const HomePage = () => {
  return (
    <Container type="section" addClass={'wrapper'}>
      <WelcomeSection />
      <AdvantagesSection />
      <UserSettingsModal />
    </Container>
  );
};

export default HomePage;
