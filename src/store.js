import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { applyMiddleware } from 'redux'
import routesReducer from './slices/routesSlice';
import routeDetailedReducer from './slices/routeDetailedSlice';
import authReducer from './slices/authSlice';
import draftReducer from './slices/draftSlice';
import ticketReducer from './slices/ticketSlice';

const store = configureStore({
  reducer: {
    routes: routesReducer,
    routesDetailed: routeDetailedReducer,
    auth: authReducer,
    draft: draftReducer,
    tickets: ticketReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {}
    })
});

export default store;
