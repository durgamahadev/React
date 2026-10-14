import { nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { Todo } from "../../type";

export const addTodoReducer = (
  currentState: Todo[],
  action: PayloadAction<string>,
) => {
  const todo: Todo = { text: action.payload, id: nanoid() };
  currentState.push(todo);
};

export const removeTodoReducer = (
  currentState: Todo[],
  action: PayloadAction<string>,
) => {
  return currentState.filter((todo) => todo.id !== action.payload);

  // const index = currentState.findIndex((todo) => todo.id === action.payload);
  // if (index !== -1) {
  //   currentState.splice(index, 1);
  // }
};
