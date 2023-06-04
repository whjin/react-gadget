import { useImmerReducer } from "use-immer";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

let nextId = 3;
const initialTasks = [
  { id: 0, text: "哲学家之路", done: true },
  { id: 1, text: "参观寺庙", done: false },
  { id: 2, text: "喝抹茶", done: false },
];

function tasksReducer(draft, action) {
  switch (action.type) {
    case "added":
      draft.push({
        id: action.id,
        text: action.text,
        done: false,
      });
      break;
    case "changed":
      const index = draft.findIndex((t) => t.id === action.task.id);
      draft[index] = action.task;
      break;
    case "deleted":
      return draft.filter((t) => t.id !== action.id);
    default:
      throw Error("未知 action：" + action.type);
  }
}

export default function TaskApp() {
  const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: nextId++,
      text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <div className="taskApp-container">
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChange={handleChangeTask}
        onDelete={handleDeleteTask}
      />
    </div>
  );
}
