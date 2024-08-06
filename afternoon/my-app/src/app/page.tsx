'use client';
import { useEffect, useState } from 'react';
import { TaskList } from './components/TaskList';
import { Task } from './interfaces';
import { useTasks, TaskProvider } from './context/TaskContext';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchedData = () => {
      setTimeout(() => {
        const fetchedTasks: Task[] = [
          {
            id: 1,
            title: 'walk dogs',
            completed: true,
          },
          {
            id: 2,
            title: 'buy food',
            completed: true,
          },
          {
            id: 3,
            title: 'learn',
            completed: false,
          },
          {
            id: 4,
            title: 'clean',
            completed: false,
          },
        ];
        setTasks(fetchedTasks);
      }, 1000);
    };

    fetchedData();
  }, []);

  return (
    <main>
      <TaskList tasks={tasks} />
    </main>
  );
}
