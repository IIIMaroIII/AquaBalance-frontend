import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  logout,
  refresh,
  signIn,
  signUp,
  update,
  userInfo,
} from './operations.js';

export const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state) => {
        state.isLoading = false;
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
      .addCase(signIn.rejected, (state) => {
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
        state.user = { ...state.user, ...payload };
        state.isLoading = false;
      })
      .addCase(update.rejected, state => {
        state.isLoading = false;
      })
      .addCase(userInfo.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userInfo.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload };
        state.isLoading = false;
      })
      .addCase(userInfo.rejected, state => {
        state.isLoading = false;
        state.isLoggedIn = false;
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
