import React from 'react';
import { Task } from "../interfaces";

interface TaskListProps {
    tasks: Task[];
}

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {


    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {task.title} - {task.completed ? 'completed' : 'not completed'}
                </li>
            ))}
        </ul>
    );
};


