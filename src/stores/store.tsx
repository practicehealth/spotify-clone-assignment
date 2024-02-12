import { configureStore } from '@reduxjs/toolkit';
import mySliceReducer from './mySlice';

export default configureStore({
  reducer: {
    show: mySliceReducer
  },
});