import { useState } from "react";
import { useTasks, useTasksDispatch } from "./TasksContext";

export default function TaskList () {
  const tasks = useTasks();

  return (
    <ul className="tasklist-wrapper">
      {
        tasks.map(task => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))
      }
    </ul>
  );
}

function Task ({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={e => dispatch({
            type: 'changed',
            task: {
              ...task,
              text: e.target.value
            }
          })}
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
        onChange={e => dispatch({
          type: 'changed',
          task: {
            ...task,
            done: e.target.checked
          }
        })}
      />
      {taskContent}
      <button onClick={() => dispatch({
        type: 'deleted',
        id: task.id
      })}>删除</button>
    </label>
  );
}