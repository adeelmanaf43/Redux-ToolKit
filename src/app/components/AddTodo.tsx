import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  return (
    <form
      className="mb-4 flex gap-x-1"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo(text));
      }}
      action=""
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <button className="bg-black text-white px-4 py-2" type="submit">
        Add Todo
      </button>
    </form>
  );
}
