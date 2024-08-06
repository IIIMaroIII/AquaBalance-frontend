import { useEffect, useState } from 'react';

import { IMAGES } from '../../components/Constants/constants.js';
import Container from '../REUSABLE/Container/Container';
import { requestTotalUsers } from 'src/utils/requestTotalUsers.js';
import { axiosResponseError } from 'src/utils/axiosResponseError.js';

import css from './AdvantagesSection.module.css';
// import useAuth from 'src/hooks/useAuth.js';

const AdvantagesSection = () => {
  // const {} = useAuth(); // Кастомный хук для быстрого доступа к isLoggedIn, isLoading и тд

  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await requestTotalUsers();
        setTotalUsers(data);
      } catch (error) {
        console.log(error);
        setTotalUsers(0);
      }
    }
    fetchData();
  }, []);

  return (
    <Container type="section" addClass={css.container}>
      <div>
        <div>
          <picture>
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
          <picture>
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
          <picture>
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
        <div>
          Our <span>{totalUsers} happy</span> customers
        </div>
      </div>
      <ul>
        <li>Habit drive</li>
        <li>View statistics</li>
        <li>Personal rate setting</li>
      </ul>
    </Container>
  );
};

export default AdvantagesSection;
