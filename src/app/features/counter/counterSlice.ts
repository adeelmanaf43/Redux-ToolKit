import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

const initialState = {
  counter: 1,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: any) => {
      state.counter = state.counter + 1;
    },
    decrement: (state: any) => {
      state.counter = state.counter - 1;
    },
    incrementByNumber: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    decrementByNumber: (state, action) => {
      state.counter = state.counter - action.payload;
    },
  },
});

export const { increment, decrement, incrementByNumber, decrementByNumber } =
  counterSlice.actions;

export default counterSlice.reducer;
