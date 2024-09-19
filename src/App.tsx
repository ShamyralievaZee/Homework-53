import React, { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';
import {IProps} from './types.ts';

const App: React.FC = () => {
    const [tasks, setTasks] = useState<IProps[]>([
        { id: '1', text: 'Do homework.' },
        { id: '2', text: 'Feed the cat.' },
        { id: '3', text: 'Finish up an assignment.' },
    ]);

    const [currentTask, setCurrentTask] = useState<string>('');

    const addTask = () => {
        if (currentTask.trim()) {
            const newTask = {
                id: Date.now().toString(),
                text: currentTask,
            };
            setTasks([...tasks, newTask]);
            setCurrentTask('');
        }
    };

    const deleteTask = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div>
            <h1>Task List</h1>
            <AddTaskForm currentTask={currentTask} setCurrentTask={setCurrentTask} addTask={addTask} />
            <div>
                {tasks.map(task => (
                    <Task key={task.id} id={task.id} taskText={task.text} deleteTask={deleteTask} />
                ))}
            </div>
        </div>
    );
};

export default App;
