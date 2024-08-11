import { createSelector } from '@reduxjs/toolkit';
import { selectUserDailyNorma } from '../users/selectors.js';

export const selectWaterItems = state => state.water.water.dailyItems;
export const selectMonthlyWaterItems = state => state.water.water.monthlyItems;

export const selectIsLoading = state => state.water.isLoading;
export const selectIsError = state => state.water.error;

export const selectDate = state => state.water.chosenDate;
export const selectChosenWaterCardId = state => state.water.chosenWaterCardId;

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

export const convertDailyTotalVolumeToPercentage = createSelector(
  [selectWaterItems, selectUserDailyNorma],
  (waterItems, dailyNorma) => {
    const volume = () => {
      if (waterItems) {
        return waterItems
          .map(item => item.volume)
          .reduce((acc, volume) => {
            return acc + volume;
          }, 0);
      }
      return;
    };

    const percentage = (volume() / (dailyNorma * 1000)) * 100;
    if (isNaN(percentage)) {
      return 0;
    } else {
      return Math.min(percentage, 100).toFixed(0);
    }
  },
);

export const dailyNormaPercentage = (day = 1) =>
  createSelector(
    [selectMonthlyWaterItems, selectUserDailyNorma],
    (monthlyWaterItems, dailyNorma) => {
      const arr = monthlyWaterItems
        .filter(item => new Date(item.date).getDate() === day)
        .map(item => item.volume);

      const total = arr.reduce((acc, num) => acc + num, 0);

      const percent = (total / (dailyNorma * 1000)) * 100;

      if (isNaN(percent)) {
        return 0;
      } else {
        return Math.min(percent, 100).toFixed(0);
      }
    },
  );

export const daysWithRecords = createSelector(
  [selectMonthlyWaterItems],
  monthlyWaterItems => {
    return monthlyWaterItems
      .map(item => new Date(item.date).getDate())
      .filter((num, idx, arr) => arr.indexOf(num) === idx)
      .sort((a, b) => a - b);
  },
);
