import storage from 'redux-persist/lib/storage';

const users = {
  key: 'users',
  storage,
  whitelist: ['user', 'isLoggedIn'],
};
const water = {
  key: 'water',
  storage,
  whitelist: ['water'],
  blacklist: ['chosenDate'],
};

const darkMode = {
  key: 'darkMode',
  storage,
  whitelist: ['darkMode'],
};

export const persistConfig = {
  users,
  water,
  darkMode
};
