import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  addWater,
  changeWater,
  deleteWater,
  fetchDailyWater,
  fetchMonthlyWater,
} from './operations.js';

export const waterSlice = createSlice({
  name: 'water',
  initialState: initialState,
  reducers: {
    changeWaterCardId(state, { payload }) {
      state.chosenWaterCardId = payload;
    },
    changeModal(state, { payload }) {
      state.modalFlags.isModalOpen = payload;
    },
    setChosenDate(state, { payload }) {
      state.chosenDate = payload;
    },
    changeWaterModalEdit(state, { payload }) {
      state.modalFlags.isWaterModalEdit = payload;
      state.modalFlags.isDeleteWaterModalOpen = false;
      state.modalFlags.isLogoutModalOpen = false;
      state.modalFlags.isUsersSettingsModalOpen = false;
      state.modalFlags.isWaterModalAdd = false;
    },
    changeWaterModalAdd(state, { payload }) {
      state.modalFlags.isWaterModalAdd = payload;
      state.modalFlags.isDeleteWaterModalOpen = false;
      state.modalFlags.isLogoutModalOpen = false;
      state.modalFlags.isUsersSettingsModalOpen = false;
      state.modalFlags.isWaterModalEdit = false;
    },
    changeDeleteWaterModalOpen(state, { payload }) {
      state.modalFlags.isDeleteWaterModalOpen = payload;
      state.modalFlags.isWaterModalAdd = false;
      state.modalFlags.isLogoutModalOpen = false;
      state.modalFlags.isUsersSettingsModalOpen = false;
      state.modalFlags.isWaterModalEdit = false;
    },
    changeUsersSettingsModalOpen(state, { payload }) {
      state.modalFlags.isUsersSettingsModalOpen = payload;
      state.modalFlags.isWaterModalAdd = false;
      state.modalFlags.isLogoutModalOpen = false;
      state.modalFlags.isDeleteWaterModalOpen = false;
      state.modalFlags.isWaterModalEdit = false;
    },
    changeLogoutModalOpen(state, { payload }) {
      state.modalFlags.isLogoutModalOpen = payload;
      state.modalFlags.isWaterModalAdd = false;
      state.modalFlags.isDeleteWaterModalOpen = false;
      state.modalFlags.isUsersSettingsModalOpen = false;
      state.modalFlags.isWaterModalEdit = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDailyWater.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addWater.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(deleteWater.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(changeWater.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchMonthlyWater.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(addWater.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(deleteWater.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.water.dailyItems = payload;
      })
      .addCase(changeWater.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(fetchDailyWater.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.water.dailyItems = payload;
      })
      .addCase(fetchMonthlyWater.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.water.monthlyItems = payload;
      })
      .addCase(changeWater.rejected, () => {
        return { ...initialState };
      })
      .addCase(fetchDailyWater.rejected, state => {
        state.isLoading = false;
        // state.water.dailyItems = [];
      })
      .addCase(addWater.rejected, () => {
        return { ...initialState };
      })
      .addCase(deleteWater.rejected, () => {
        return { ...initialState };
      })
      .addCase(fetchMonthlyWater.rejected, state => {
        state.isLoading = false;
        // state.water.monthlyItems = [];
      });
  },
});
export const {
  changeModal,
  setChosenDate,
  changeWaterModalEdit,
  changeWaterModalAdd,
  changeDeleteWaterModalOpen,
  changeUsersSettingsModalOpen,
  changeLogoutModalOpen,
  changeWaterCardId,
} = waterSlice.actions;

export const waterReducer = waterSlice.reducer;
