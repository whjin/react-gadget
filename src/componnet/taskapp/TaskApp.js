import { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

let nextId = 3;
const initialTasks = [
  { id: 0, text: '参观卡夫卡博物馆', done: true },
  { id: 1, text: '看木偶戏', done: false },
  { id: 2, text: '列侬墙图片', done: false }
];

function tasksReducer (tasks, action) {
  switch (action) {
    case 'added':
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    case 'changed':
      return tasks.map(task => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
    case 'deleted':
      return tasks.filter(task => task.id !== action.id);
    default:
      throw Error('未知操作：' + action.type);
  }
}

export default function TaskApp () {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  function handleAddTask (text) {
    dispatch({
      type: 'added',
      id: nextId,
      text
    });
  }

  function handleChangeTask (task) {
    dispatch({
      type: 'changed',
      task
    });
  }

  function handleDeleteTask (taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  return (
    <div className="taskapp-container">
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
    </div>
  );
}