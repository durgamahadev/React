import { configureStore } from "@reduxjs/toolkit";
import CounterReducer  from "./slice/counterSlice";

export const store = configureStore({
  reducer: { counter: CounterReducer },
});
