import CONSTANTS from 'src/components/Constants/constants.js';

export const initialState = {
  user: {
    photoUrl: CONSTANTS.USER.DEFAULT_USER_IMAGE,

    token: null,
  },
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
};
