import { createSelector } from '@reduxjs/toolkit';
import { selectUserDailyNorma } from '../users/selectors.js';

export const selectWaterItems = state => state.water.water.dailyItems;
export const selectMonthlyWaterItems = state => state.water.water.monthlyItems;

export const selectIsLoading = state => state.water.isLoading;
export const selectIsError = state => state.water.error;

export const selectDate = state => state.water.chosenDate;
export const selectChosenWaterCardId = state => state.chosenWaterCardId;

export const selectModalFlags = state => state.water.modalFlags;
export const selectIsModalOpen = state => state.water.modalFlags.isModalOpen;
export const selectIsDeleteWaterModalOpen = state =>
  state.water.modalFlags.isDeleteWaterModalOpen;
export const selectIsLogoutModalOpen = state =>
  state.water.modalFlags.isLogoutModalOpen;
export const selectIsUsersSettingsModalOpen = state =>
  state.water.modalFlags.isUsersSettingsModalOpen;
export const selectIsWaterModalEdit = state =>
  state.water.modalFlags.isWaterModalEdit;
export const selectIsWaterModalAdd = state =>
  state.water.modalFlags.isWaterModalAdd;

export const selectPercentage = createSelector(
  [selectWaterItems, selectUserDailyNorma],
  (waterItems, dailyNorma) => {
    const volume = () => {
      if (waterItems !== null || waterItems.length > 0) {
        return waterItems
          .map(item => item.volume)
          .reduce((acc, volume) => {
            return acc + volume;
          }, 0);
      }
    };

    const percentage = (volume() / (dailyNorma * 1000)) * 100;
    if (isNaN(percentage)) {
      return 0;
    } else {
      if (percentage < 100) return percentage;
      if (percentage >= 100) return 100;
    }
  },
);
