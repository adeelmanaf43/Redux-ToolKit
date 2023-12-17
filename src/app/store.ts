import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../app/features/todo/todoSlice";
import counterReducer from "../app/features/counter/counterSlice";

export const store = configureStore({
  reducer: todoReducer,
});

export const counterStore = configureStore({
  reducer: counterReducer,
});
