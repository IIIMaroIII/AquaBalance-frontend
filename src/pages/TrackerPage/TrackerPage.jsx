// import css from './TrackerPage.module.css';
import WaterDetailedInfo from 'src/components/Water/WaterDetailedInfo/WaterDetailedInfo.jsx';
import WaterMainInfo from 'src/components/Water/WaterMainInfo/WaterMainInfo.jsx';
import Container from 'src/components/REUSABLE/Container/Container.jsx';
import UserSettingsModal from 'src/components/Modals/UserSettingsModal/UserSettingsModal';

const TrackerPage = () => {
  return (
    <Container type="section" addClass={'wrapper'}>
      <WaterMainInfo />
      <WaterDetailedInfo />
      <UserSettingsModal />
    </Container>
  );
};

export default TrackerPage;
