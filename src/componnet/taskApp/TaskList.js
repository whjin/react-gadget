import { useState } from "react";

export default function TaskList({ tasks, onChange, onDelete }) {
  return (
    <ul className="tasklist-wrapper">
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChange} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>保存</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>编辑</button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) =>
          onChange({
            ...task,
            done: e.target.checked,
          })
        }
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>删除</button>
    </label>
  );
}
