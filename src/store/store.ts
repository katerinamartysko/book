import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { clientsReducer } from './clients/reducer';

const rootReducer = combineReducers({
  clientsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type State = ReturnType<typeof store.getState>;
