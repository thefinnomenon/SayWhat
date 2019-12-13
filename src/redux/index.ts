import AsyncStorage from '@react-native-community/async-storage';
import { combineReducers } from 'redux';
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
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
import themeReducer from '../features/theming/ThemingSlice';
import i18nReducer from '../features/i18n/i18nSlice';

const rootReducer = combineReducers({
  theming: themeReducer,
  i18n: i18nReducer,
});

type RootState = ReturnType<typeof rootReducer>;

const logger = createLogger();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //whitelist: [],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let middleware = [];
if (process.env.NODE_ENV === 'development') {
  middleware = [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    logger,
  ];
} else {
  middleware = [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ];
}

const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const persistor = persistStore(store);

// Uncomment and refresh app if you wan't to clear persisted state
// persistor.purge();

export default store;
