// import css from './TrackerPage.module.css';
import WaterDetailedInfo from 'src/components/Water/WaterDetailedInfo/WaterDetailedInfo.jsx';
import WaterMainInfo from 'src/components/Water/WaterMainInfo/WaterMainInfo.jsx';
import Container from 'src/components/REUSABLE/Container/Container.jsx';

const TrackerPage = () => {
  return (
    <Container type="section" addClass={'wrapper'}>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </Container>
  );
};

export default TrackerPage;
