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
      className={clsx(css.content)}
      overlayClassName={clsx(css.overlay, {
        [css.afterOpen]: afterOpen,
        [css.beforeClose]: beforeClose,
      })}
    >
      <CloseButton
        onClose={() => {
          setBeforeClose(!beforeClose);
          setTimeout(() => {
            dispatch(changeModal(false));
          }, 500);
        }}
      />
      {renderModal()}
      {children}
      {/* <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi iure
        dolorum nam facilis, doloribus ut. Incidunt, maiores labore. Corporis
        voluptate quae nisi, possimus dolor enim voluptatum? Veniam porro
        quisquam hic non voluptas maxime minus officia placeat voluptate fuga
        deserunt consequatur, quis illum, aliquam dolore dolores ducimus
        reiciendis! Velit, dolorem! Nobis asperiores qui quos illum molestias
        deleniti iusto magni architecto officiis libero aut sapiente sunt quis
        vitae vero perferendis ab doloribus, atque laborum voluptates sed
        corporis commodi pariatur placeat? Autem porro deserunt, minima iure
        aperiam rerum repudiandae est, suscipit eius fuga iusto at placeat quis
        quo neque quae consectetur quisquam alias?
      </div> */}
    </Modal>
  );
};

export default MainModal;
