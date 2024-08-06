'use client';
import { useState } from 'react';
import { TaskList } from './components/TaskList';
import { useTasks, TaskProvider } from './context/TaskContext';

function HomeContent() {
  const [inputValue, setInputValue] = useState('');
  const { tasks, addTask } = useTasks();

  const handleAddTask = () => {
      if (inputValue) {
          addTask(inputValue);
          setInputValue('');
      }
  };

  return (
      <TaskProvider>
          <main>
              <TaskList tasks={tasks} />
              <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="add new task"
              />
              <button onClick={handleAddTask}>add task</button>
          </main>
      </TaskProvider>
  );
}


export default function Home() {
  return (
    <TaskProvider>
      <HomeContent />
    </TaskProvider>
  );
}
