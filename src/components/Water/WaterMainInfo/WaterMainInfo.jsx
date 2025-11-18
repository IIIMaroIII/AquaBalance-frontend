import WaterDailyNorma from './WaterDailyNorma/WaterDailyNorma.jsx';
import WaterProgressBar from './WaterProgressBar/WaterProgressBar.jsx';
import Container from 'src/components/REUSABLE/Container/Container.jsx';
import AddWaterBtn from './AddWaterBtn/AddWaterBtn.jsx';

import LogoAndSwitchModeBtn from 'src/components/REUSABLE/LogoAndSwitchModeBtn/LogoAndSwitchModeBtn.jsx';

const WaterMainInfo = () => {
  return (
    <Container type="section" addClass={''}>
      <LogoAndSwitchModeBtn />
      <WaterDailyNorma />
      <WaterProgressBar />
      <AddWaterBtn />
    </Container>
  );
};

export default WaterMainInfo;
