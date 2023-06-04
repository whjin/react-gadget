import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");

  return (
    <div className="addtask-wrapper">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="添加任务"
      />
      <button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        添加
      </button>
    </div>
  );
}
