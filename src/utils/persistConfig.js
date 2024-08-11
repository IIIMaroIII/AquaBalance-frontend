import storage from 'redux-persist/lib/storage';

const users = {
  key: 'users',
  storage,
  whitelist: ['user', 'isLoggedIn'],
  // blacklist: ['isLoggedIn'],
};
const water = {
  key: 'water',
  storage,
  whitelist: ['water'],
  blacklist: ['chosenDate'],
};

export const persistConfig = {
  users,
  water,
};
