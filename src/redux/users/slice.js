import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { logout, refresh, signIn, signUp, update } from './operations.js';

export const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, () => {})
      .addCase(signUp.fulfilled, () => {})
      .addCase(signUp.rejected, () => {})
      .addCase(signIn.pending, () => {})
      .addCase(signIn.fulfilled, () => {})
      .addCase(signIn.rejected, () => {})
      .addCase(logout.pending, () => {})
      .addCase(logout.fulfilled, () => {})
      .addCase(logout.rejected, () => {})
      .addCase(update.pending, () => {})
      .addCase(update.fulfilled, () => {})
      .addCase(update.rejected, () => {})
      .addCase(refresh.pending, () => {})
      .addCase(refresh.fulfilled, () => {})
      .addCase(refresh.rejected, () => {});
  },
});

export const usersReducer = usersSlice.reducer;
