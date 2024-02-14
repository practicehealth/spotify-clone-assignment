import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import mySliceReducer from "./sideBarSlice";

const store = configureStore({
  reducer: {
    sideBar: mySliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
// export type RootState = ReturnType<typeof store.getState>;

export default store;
