import React from 'react';
import {ITask} from '../types.ts';

const Task: React.FC<ITask> = ({id, taskText, deleteTask}) => {
    return (
        <div>
            <span>{taskText}</span>
            <button onClick={() => deleteTask(id)}>Delete</button>
        </div>
    );
};

export default Task;