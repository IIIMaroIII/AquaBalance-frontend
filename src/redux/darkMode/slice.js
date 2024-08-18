import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    changeTheme(state) {
      state.darkMode.isDark = !state.darkMode.isDark;
    },
  },
});

export const { changeTheme } = darkModeSlice.actions;
export const darkModeReducer = darkModeSlice.reducer;
