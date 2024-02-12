import { configureStore } from '@reduxjs/toolkit';
import mySliceReducer from './mySlice';

const store = configureStore({
  reducer: {
    show: mySliceReducer
  },
});

export default store;
