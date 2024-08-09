// import css from './WaterMainInfo.module.css';
import WaterDailyNorma from './WaterDailyNorma/WaterDailyNorma.jsx';
import WaterProgressBar from './WaterProgressBar/WaterProgressBar.jsx';
import Logo from 'src/components/REUSABLE/Logo/Logo';
import Container from 'src/components/REUSABLE/Container/Container.jsx';
import AddWaterBtn from './AddWaterBtn/AddWaterBtn.jsx';

const WaterMainInfo = () => {
  return (
    <Container type="section" addClass={''}>
      <Logo />
      <WaterDailyNorma />
      <WaterProgressBar />
      <AddWaterBtn />
    </Container>
  );
};

export default WaterMainInfo;
