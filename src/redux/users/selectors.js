export const selectUser = state => state.users.user;
export const selectDailyNorma = state => state.users.user.dailyNorma;
export const selectUserToken = state => state.users.user.token;
export const selectUserIsLoggedIn = state => state.users.isLoggedIn;
export const selectRefreshing = state => state.users.isRefreshing;
export const selectUserIsLoading = state => state.users.isLoading;
export const selectUserError = state => state.users.error;
