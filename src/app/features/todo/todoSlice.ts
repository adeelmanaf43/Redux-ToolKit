import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "1", task: "Learn Redux" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), task: action.payload };
      state.todos.push(todo);
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo: any) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        } else {
          return todo;
        }
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo: any) => todo.id !== action.payload
      );
    },
  },
});

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
