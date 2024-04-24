import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import logsSliceReducer from "./logsSlice";
import buttonsSliceReducer from "./buttonsSlice";
import modalSliceReducer from "./modalSlice";

export const store = configureStore({
  reducer: {
    logs: logsSliceReducer,
    buttons: buttonsSliceReducer,
    modal: modalSliceReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
