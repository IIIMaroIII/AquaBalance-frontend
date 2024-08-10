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
        state.error = null;
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
        state.error = null;
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
      .addCase(logout.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, () => {
        return { ...initialState };
      })
      .addCase(logout.rejected, () => {
        return { ...initialState };
      })
      .addCase(update.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(update.fulfilled, (state, { payload }) => {
        state.user = payload.data;
        state.isLoading = false;
      })
      .addCase(update.rejected, state => {
        state.isLoading = false;
      })
      .addCase(refresh.pending, state => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.user.token = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refresh.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
      });
  },
});

export const usersReducer = usersSlice.reducer;
