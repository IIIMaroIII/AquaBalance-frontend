import CONSTANTS from 'src/components/Constants/constants.js';

export const initialState = {
  user: {
    name: null,
    email: null,
    gender: null,
    dailyNorma: 2,
    weight: null,
    photoUrl: CONSTANTS.USER.DEFAULT_USER_IMAGE,
    timeInSports: null,
    token: null,
  },
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
};
