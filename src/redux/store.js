import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';

import { persistConfig } from 'src/utils/persistConfig';
import { usersReducer } from './users/slice';
import { waterReducer } from './water/slice';
import { chartReducer } from './chart/slice.js';

const rootReducer = {
  users: persistReducer(persistConfig.users, usersReducer),
  water: persistReducer(persistConfig.water, waterReducer),
  chart: chartReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredActionPaths: ['payload', 'meta.arg'],
      },
    }),
});

export default store;
export const persistor = persistStore(store);
