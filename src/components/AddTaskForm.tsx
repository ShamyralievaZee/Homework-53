const addTaskForm = ({currentTask, setCurrentTask, addTask}) => {
    return(
        <form>
            <input
                type="text"
                value={currentTask}
                placeholder="Add new task"
                onChange={(e) => setCurrentTask(e.target.value)}
            />
            <button onClick={addTask}>Add</button>
        </form>
    );
};
export default addTaskForm;