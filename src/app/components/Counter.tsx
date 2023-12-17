import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByNumber,
  decrementByNumber,
} from "../features/counter/counterSlice";
export default function Counter() {
  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(0);
  const count = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-y-3">
      <p>Counter value is {count}</p>
      <div className="flex gap-x-2">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button disabled={count <= 0} onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
      <div className="flex gap-x-2">
        <input
          value={num}
          onChange={(e) => setNum(Number(e.target.value))}
          type="number"
        />
        <button
          disabled={num <= 1}
          onClick={() => {
            dispatch(incrementByNumber(num));
            setNum(0);
          }}
        >
          Increment By Number
        </button>
      </div>
      <div className="flex gap-x-2">
        <input
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
          type="number"
        />
        <button
          disabled={num1 <= 1}
          onClick={() => {
            dispatch(decrementByNumber(num1));
            setNum1(0);
          }}
        >
          Decrement By Number
        </button>
      </div>
    </div>
  );
}
