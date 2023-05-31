import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { TasksProvider } from "./TasksContext";

export default function TaskApp () {
  return (
    <div className="taskapp-container">
      <TasksProvider>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </div>
  );
}