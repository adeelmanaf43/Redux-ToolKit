"use client";
import Image from "next/image";
import { Provider } from "react-redux";
import { store } from "./store";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";
import { counterStore } from "./store";
export default function Home() {
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <h1 className="font-bold text-2xl ">Todo List</h1>
      <Provider store={store}>
        <AddTodo />
        <TodoList />
      </Provider>
      <h1 className="font-bold text-2xl mt-8">Counter App</h1>
      <Provider store={counterStore}>
        <Counter />
      </Provider>
    </div>
  );
}
