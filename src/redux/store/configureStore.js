import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import monitorReducersEnhancer from '../enhancers/monitorReducers';
import loggerMiddleware from '../middleware/logger';
import rootReducer from '../reducers';

const configureAppStore = preloadedState => {
  let middleware = [...getDefaultMiddleware()];
  let enhancers = [];

  if (process.env.NODE_ENV === 'development') {
    middleware = [loggerMiddleware, ...middleware];
    enhancers = [monitorReducersEnhancer, ...enhancers];
  } else {
    middleware = [...middleware];
    enhancers = [...enhancers];
  }

  const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
    enhancers,
  });

  return store;
};

export default configureAppStore;
