import { useDispatch, useSelector } from "react-redux";
import { editTodo, deleteTodo } from "../features/todo/todoSlice";
import { useState } from "react";

export default function TodoList() {
  const todos = useSelector((state: any) => state.todos);
  return (
    <div className="space-y-3">
      {todos.map((todo: any) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

function Todo({ todo }: any) {
  const dispatch = useDispatch();
  const [text, setText] = useState(todo.task);
  const [todoo, setTodoo] = useState(todo);
  const [isEdit, setIsEdit] = useState(false);
  let todoContent;
  if (isEdit) {
    todoContent = (
      <div className="flex gap-x-2">
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setTodoo({ ...todoo, task: e.target.value });
          }}
          type="text"
        />
        <button
          onClick={() => {
            dispatch(editTodo(todoo));
            setIsEdit(false);
          }}
        >
          Save
        </button>
      </div>
    );
  } else {
    todoContent = (
      <div className="flex gap-x-2">
        {todo.task}
        <button onClick={() => setIsEdit(true)}>Edit</button>
      </div>
    );
  }
  return (
    <div className="flex gap-x-2">
      {todoContent}
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </div>
  );
}
