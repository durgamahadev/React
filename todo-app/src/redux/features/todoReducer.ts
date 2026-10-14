import { nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { Todo } from "../../type";

export const addTodoReducer = (currentState: Todo[], action: PayloadAction<string>) => {
  const todo: Todo = {text:action.payload, id: nanoid() };
  currentState.push(todo);
};

export const removeTodoReducer= (
  currentState: Todo[],
  action: PayloadAction<string>,
) => {
  currentState = currentState.filter((todo) => todo.id !== action.payload);
};
