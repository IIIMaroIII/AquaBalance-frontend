import WaterDailyNorma from './WaterDailyNorma/WaterDailyNorma.jsx';
import WaterProgressBar from './WaterProgressBar/WaterProgressBar.jsx';
import Container from 'src/components/REUSABLE/Container/Container.jsx';
import AddWaterBtn from './AddWaterBtn/AddWaterBtn.jsx';

import LogoAndSwitchMode from 'src/components/LogoAndSwitchMode/LogoAndSwitchMode';

const WaterMainInfo = () => {
  return (
    <Container type="section" addClass={''}>
      <LogoAndSwitchMode />
      <WaterDailyNorma />
      <WaterProgressBar />
      <AddWaterBtn />
    </Container>
  );
};

export default WaterMainInfo;
