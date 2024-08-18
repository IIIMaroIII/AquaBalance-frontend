import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state) {
      state.theme.isDark = !state.theme.isDark
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
