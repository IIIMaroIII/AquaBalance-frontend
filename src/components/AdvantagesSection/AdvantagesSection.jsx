import css from './AdvantagesSection.module.css';
// import useAuth from 'src/hooks/useAuth.js';

import Container from '../REUSABLE/Container/Container';

const AdvantagesSection = () => {
  // const {} = useAuth(); // Кастомный хук для быстрого доступа к isLoggedIn, isLoading и тд

  return (
    <Container type="section" addClass={css.advantagesSection}>
      <Container type="div" addClass={css.advantagesSectionContainer}>
        AdvantagesSection
      </Container>
    </Container>
  );
};

export default AdvantagesSection;
