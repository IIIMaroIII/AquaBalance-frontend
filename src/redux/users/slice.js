import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { logout, refresh, signIn, signUp, update } from './operations.js';

export const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, state => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user = payload.data;
        state.isLoggedIn = true;
        state.isLoading = null;
      })
      .addCase(signUp.rejected, state => {
        state.isLoading = false;
      })
      .addCase(signIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.user.email = payload.data.email;
        state.user.token = payload.data.accessToken;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = false;
      })
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
