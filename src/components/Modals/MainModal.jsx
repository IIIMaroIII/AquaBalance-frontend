import css from './mainModal.module.css';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

import WaterModal from './WaterModal/WaterModal';
import DeleteWaterModal from './DeleteWaterModal/DeleteWaterModal';
import LogoutModal from './LogoutModal/LogoutModal';
import UserSettingsModal from './UserSettingsModal/UserSettingsModal';
import { changeModal } from 'src/redux/water/slice.js';
import useModals from 'src/hooks/useModals.js';
import CloseButton from 'src/components/REUSABLE/CloseButton/CloseButton.jsx';

const MainModal = ({ children }) => {
  const dispatch = useDispatch();
  const [afterOpen, setAfterOpen] = useState(false);
  const [beforeClose, setBeforeClose] = useState(false);
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

  useEffect(() => {
    if (!modal) return;
    setAfterOpen(true);
  }, [modal]);

  return (
    <Modal
      appElement={document.getElementById('root')}
      isOpen={modal}
      onRequestClose={() => {
        setBeforeClose(!beforeClose);
        setTimeout(() => {
          dispatch(changeModal(false));
        }, 500);
      }}
      contentLabel="Modal"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={clsx(
        css.content,
        waterModalAdd && css.waterModalContent,
        waterModalEdit && css.waterModalContent,
        usersSettingsModal && css.settingsModalContent
      )}
      overlayClassName={clsx(
        css.overlay,
        {
          [css.afterOpen]: afterOpen,
          [css.beforeClose]: beforeClose,
        },
      )}
    >
      <CloseButton
        onClose={() => {
          setBeforeClose(!beforeClose);
          setTimeout(() => {
            dispatch(changeModal(false));
          }, 500);
        }}
        addButtonClass={clsx(
          waterModalAdd && css.closeWaterModalButton,
          waterModalEdit && css.closeWaterModalButton,
          usersSettingsModal && css.closeSettingsModalButton,
        )}
      />
      {renderModal()}
      {children}
    </Modal>
  );
};

export default MainModal;
