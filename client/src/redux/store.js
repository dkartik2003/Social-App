import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer'; // Import your rootReducer

const store = configureStore({
  reducer: rootReducer,
});

const { dispatch } = store;

export { store, dispatch };
