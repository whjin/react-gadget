import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { TasksProvider } from "./TasksContext";

export default function TaskApp () {
  return (
    <div className="common-container taskApp-container">
      <TasksProvider>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </div>
  );
}
