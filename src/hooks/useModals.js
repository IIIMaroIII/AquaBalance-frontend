import { useDispatch, useSelector } from 'react-redux';

import {
  selectIsDeleteWaterModalOpen,
  selectIsLogoutModalOpen,
  selectIsModalOpen,
  selectIsUsersSettingsModalOpen,
  selectIsWaterModalAdd,
  selectIsWaterModalEdit,
} from 'src/redux/water/selectors.js';
import {
  changeDeleteWaterModalOpen,
  changeLogoutModalOpen,
  changeModal,
  changeUsersSettingsModalOpen,
  changeWaterModalAdd,
  changeWaterModalEdit,
} from 'src/redux/water/slice.js';

const useModals = () => {
  const dispatch = useDispatch();
  const waterModalEdit = useSelector(selectIsWaterModalEdit);
  const waterModalAdd = useSelector(selectIsWaterModalAdd);
  const modal = useSelector(selectIsModalOpen);
  const deleteWaterModal = useSelector(selectIsDeleteWaterModalOpen);
  const logoutModal = useSelector(selectIsLogoutModalOpen);
  const usersSettingsModal = useSelector(selectIsUsersSettingsModalOpen);

  return {
    changeModal,
    changeWaterModalAdd,
    changeWaterModalEdit,
    changeDeleteWaterModalOpen,
    changeUsersSettingsModalOpen,
    changeLogoutModalOpen,
    dispatch,
    waterModalEdit,
    waterModalAdd,
    modal,
    deleteWaterModal,
    logoutModal,
    usersSettingsModal,
  };
};

export default useModals;
