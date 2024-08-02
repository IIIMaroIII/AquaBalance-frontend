import { formatISO } from 'date-fns';

export const initialState = {
  water: {
    dailyItems: [],
    monthlyItems: [],
  },
  modalFlags: {
    isModalOpen: false,
    isWaterOpen: false,
    isDeleteWaterModalOpen: false,
    isUsersSettingsModalOpen: false,
    isLogoutModalOpen: false,
    isWaterModalEdit: false,
    isWaterModalAdd: false,
  },
  chosenWaterCardId: null,
  chosenDate: formatISO(new Date()),
  isLoading: false,
};
