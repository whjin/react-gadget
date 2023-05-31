import { createContext, useContext, useReducer } from "react";

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

const initialTasks = [
  { id: 0, text: '哲学家之路', done: true },
  { id: 1, text: '参观寺庙', done: false },
  { id: 2, text: '喝抹茶', done: false }
];

function tasksReducer (tasks, action) {
  switch (action.type) {
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

export function TasksProvider ({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks () {
  return useContext(TasksContext);
}

export function useTasksDispatch () {
  return useContext(TasksDispatchContext);
}

