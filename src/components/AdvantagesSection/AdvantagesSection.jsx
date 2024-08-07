import { IMAGES } from '../../components/Constants/constants.js';
import css from './AdvantagesSection.module.css';
// import useAuth from 'src/hooks/useAuth.js';

import Container from '../REUSABLE/Container/Container';
import { useEffect } from 'react';

const AdvantagesSection = () => {
  // const {} = useAuth(); // Кастомный хук для быстрого доступа к isLoggedIn, isLoading и тд

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //     } catch (error) {}
  //   }
  // }, []);

  return (
    <Container type="section" addClass={css.container}>
      <div className={css.ourHappyCustomersContainer}>
        <div className={css.avatarsList}>
          <picture className={css.avatar}>
            <source
              srcSet={`${IMAGES.firstUser1x} 1x, ${IMAGES.firstUser2x} 2x`}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${IMAGES.firstUserMob1x} 1x, ${IMAGES.firstUserMob2x} 2x`}
            />
            <img
              src={IMAGES.firstUser1x}
              className={css.homePageCustomersPhoto}
              alt="First user"
              width="47"
              height="47"
            />
          </picture>
          <picture className={css.avatar}>
            <source
              srcSet={`${IMAGES.secondUser1x} 1x, ${IMAGES.secondUser2x} 2x`}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${IMAGES.secondUserMob1x} 1x, ${IMAGES.secondUserMob2x} 2x`}
            />
            <img
              src={IMAGES.secondUser1x}
              className={css.homePageCustomersPhoto}
              alt="Second user"
              width="47"
              height="47"
            />
          </picture>
          <picture className={css.avatar}>
            <source
              srcSet={`${IMAGES.thirdUser1x} 1x, ${IMAGES.thirdUser2x} 2x`}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${IMAGES.thirdUserMob1x} 1x, ${IMAGES.thirdUserMob2x} 2x`}
            />
            <img
              src={IMAGES.thirdUser1x}
              className={css.homePageCustomersPhoto}
              alt="Third user"
              width="47"
              height="47"
            />
          </picture>
        </div>
        <div className={css.ourHappyCustomersText}>
          Our <span className={css.ourHappyCustomersTextSpan}>happy</span> customers
        </div>
      </div>
      <ul className={css.advantagesList}>
        <li className={css.advantagesListItem}>Habit drive</li>
        <li className={css.advantagesListItem}>View statistics</li>
        <li className={css.advantagesListItem}>Personal rate setting</li>
      </ul>
    </Container>
  );
};

export default AdvantagesSection;
