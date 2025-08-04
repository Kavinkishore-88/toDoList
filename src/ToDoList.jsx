import React, { useState } from "react";


function ToDoList() {
    const [tasks, setTasks] = useState(["kavin","go","someware"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    return (
        <div className="body">
            <div className="in-body">
                <h1>To Do List</h1>
                <div className="in">
                    <input 
                    type="text"
                    placeholder="Enter a task"
                    value={newTask}
                    onChange={handleInputChange}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            addTask();
                        }
                    }}/>
                    <button className="add-btn"
                    onClick={addTask}
                    >
                        Add
                    </button>
                </div>
            </div>
            <div className="op">
                <ol>
                    {tasks.map((task, index) => 
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button className="delete"
                            onClick={() => deleteTask(index)}>
                                ❌
                            </button>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    );
}

export default ToDoList;
