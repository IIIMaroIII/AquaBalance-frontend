import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    setDarkMode(state) {
      state.darkMode.isDark = !state.darkMode.isDark;
    },
  },
});

export const { setDarkMode } = darkModeSlice.actions;
export const darkModeReducer = darkModeSlice.reducer;
