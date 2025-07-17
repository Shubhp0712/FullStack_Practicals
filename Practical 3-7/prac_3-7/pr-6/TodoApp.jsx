import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import './App.css';

function TodoApp() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [editId, setEditId] = useState(null);

    const handleAddTask = () => {
        if (!task.trim()) return;

        if (editId !== null) {
            setTasks(tasks.map((t, i) => i === editId ? task : t));
            setEditId(null);
        } else {
            setTasks([...tasks, task]);
        }

        setTask('');
    };

    const handleEditTask = (index) => {
        setTask(tasks[index]);
        setEditId(index);
    };

    const handleDeleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="todo-box flex justify-center items-center">
            <div className="todo-container">
                <h2 className='font-bold'>Get Things Done !</h2>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="What is the task today?"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button onClick={handleAddTask}>
                        {editId !== null ? 'Update' : 'Add Task'}
                    </button>
                </div>

                <div className="task-list">
                    {tasks.map((t, index) => (
                        <div className="task-item" key={index}>
                            <span>{t}</span>
                            <div className="icons flex">
                                <FaEdit onClick={() => handleEditTask(index)} />
                                <FaTrash onClick={() => handleDeleteTask(index)} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TodoApp;
