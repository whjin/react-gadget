import { useState } from "react";
import { useTasksDispatch } from "./TasksContext";

let nextId = 3;

export default function AddTask () {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();

  return (
    <div className="addtask-wrapper">
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="添加任务"
      />
      <button onClick={() => {
        setText('');
        dispatch({
          type: 'added',
          id: nextId++,
          text
        });
      }}>添加</button>
    </div>
  );
}