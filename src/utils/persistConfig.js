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

const theme = {
  key: 'theme',
  storage,
  whitelist: ['theme'],
};

export const persistConfig = {
  users,
  water,
  theme
};
