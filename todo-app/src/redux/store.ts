import { configureStore } from "@reduxjs/toolkit";
import TodoReducer, { todo } from "./features/todoSlice";
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
  type TypedUseSelectorHook,
} from "react-redux";

export const store = configureStore({
  reducer: { [todo]: TodoReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const useDispatch = ()=> useReduxDispatch<AppDispatch>();
const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export { useDispatch, useSelector };
