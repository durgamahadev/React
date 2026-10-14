import { configureStore } from "@reduxjs/toolkit";
import TodoReducer, { todo } from "./features/todoSlice";

export const store = configureStore({
  reducer: { [todo]: TodoReducer },
});
