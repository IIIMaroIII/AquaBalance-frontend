// import css from './WaterMainInfo.module.css';
import WaterDailyNorma from './WaterDailyNorma/WaterDailyNorma.jsx';
import WaterProgressBar from './WaterProgressBar/WaterProgressBar.jsx';
import Logo from 'src/components/REUSABLE/Logo/Logo';
import Container from 'src/components/REUSABLE/Container/Container.jsx';
import Button from 'src/components/REUSABLE/Button/Button.jsx';

const WaterMainInfo = () => {
  return (
    <Container type="section" addClass={''}>
      <Logo />
      <WaterDailyNorma />
      <WaterProgressBar />
      {/* {<Button addClass={''}>{children}</Button>} */}
      <Button/>
    </Container>
  );
};

export default WaterMainInfo;
