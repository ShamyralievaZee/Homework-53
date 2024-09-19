import React from 'react';
import {IForm} from '../types.ts';
import '../App.css';

const addTaskForm: React.FC<IForm> = ({currentTask, setCurrentTask, addTask}) => {
    return(
        <form className='mainForm'>
            <input
                required={true}
                className='inputForm'
                type="text"
                value={currentTask}
                placeholder="Add new task"
                onChange={(e) => setCurrentTask(e.target.value)}
            />
            <button type='submit' onClick={addTask} className='formButton'>Add</button>
        </form>
    );
};
export default addTaskForm;