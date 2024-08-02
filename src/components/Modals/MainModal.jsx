import Modal from 'react-modal';
import css from './mainModal.module.css';
import { useDispatch } from 'react-redux';
import WaterModal from './WaterModal/WaterModal';
import DeleteWaterModal from './DeleteWaterModal/DeleteWaterModal';
import LogoutModal from './LogoutModal/LogoutModal';
import UserSettingsModal from './UserSettingsModal/UserSettingsModal';
import { changeModal } from 'src/redux/water/slice.js';
import useModals from 'src/hooks/useModals.js';

const MainModal = ({ children }) => {
  const dispatch = useDispatch();
  const {
    waterModalAdd,
    waterModalEdit,
    modal,
    deleteWaterModal,
    logoutModal,
    usersSettingsModal,
  } = useModals();

  const renderModal = () => {
    if (waterModalEdit) {
      return <WaterModal operationType="edit" />;
    }
    if (waterModalAdd) {
      return <WaterModal operationType="add" />;
    }
    if (deleteWaterModal) {
      return <DeleteWaterModal />;
    }
    if (logoutModal) {
      return <LogoutModal />;
    }
    if (usersSettingsModal) {
      return <UserSettingsModal />;
    }
  };

  return (
    <div className={css.backdrop}>
      <Modal
        appElement={document.getElementById('root')}
        isOpen={modal}
        onRequestClose={() => dispatch(changeModal(false))}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        {renderModal()}
        {children}
      </Modal>
    </div>
  );
};

export default MainModal;
