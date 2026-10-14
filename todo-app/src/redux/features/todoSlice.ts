import { createSlice } from "@reduxjs/toolkit";
import type { Todo } from "../../type";
import { addTodoReducer, removeTodoReducer } from "./todoReducer";

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoReducer,
    removeTodoReducer,
  },
});

export const { addTodoReducer: addTodo, removeTodoReducer: removeTodo } =
  todoSlice.actions;
export const todo = todoSlice.name;
export default todoSlice.reducer;
