import { createContext, useState, useContext, ReactNode } from 'react';
import { Task } from '../interfaces';

interface TaskContextType {
  tasks: Task[];
  addTask: (title: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    setTasks((previousTasks) => [
      ...previousTasks,
      {
        id: previousTasks.length + 1,
        title,
        completed: false,
      },
    ]);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    console.log('Error');
  }
  return context;
};
