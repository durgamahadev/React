import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => (state += 1),
    incrementBy: (state,action) => (state += action.payload),
    decrement: (state) => (state -= 1),
  },
})

export const {increment,decrement,incrementBy}= counterSlice.actions;
export const Counter =(state)=> state.counter;
export default counterSlice.reducer;


