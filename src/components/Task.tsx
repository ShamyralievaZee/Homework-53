import React from 'react';
import {ITask} from '../types.ts';

const Task: React.FC<ITask> = ({id, taskText, deleteTask}) => {
    return (
        <div className='task-container'>
            <span>{taskText}</span>
            <button onClick={() => deleteTask(id)} className='deleteBtn'>X</button>
        </div>
    );
};

export default Task;