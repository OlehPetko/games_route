import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {nanoid} from "nanoid";

const Todo = () => {
    const initialState = [
        {id: nanoid(), task: 'Task 1', done: false},
        {id: nanoid(), task: 'Task 2', done: false},
        {id: nanoid(), task: 'Task 3', done: false},
        {id: nanoid(), task: 'Task 4', done: false},
    ]
    const [tasks, setTasks] = useState(initialState)
    const [newTask, setNewTask] = useState('')

    const getTask = (newTask) => {
        const updateTask = [...tasks, {id: nanoid(), task: newTask, done: false}]
        setTasks(updateTask)
    }
    const addTask = () => {
        getTask(newTask)
        setNewTask('')

    }
    const del = (taskId) => {
        const updateTask = tasks.filter(el => el.id !== taskId)
        setTasks(updateTask)
    }

    return (
        <div>
            <nav>
                <Link to='/counter'>Counter</Link>
                <br/>
                <Link to='/tictaktoe'>Tic Tak Toe</Link>
                <br/>
                <Link to='/counterdifficult'>Counter Difficult</Link>
            </nav>
            <h1>To Do</h1>
            <input type="text" placeholder='new task' value={newTask}
                   onChange={event => setNewTask(event.target.value)}/>
            <button onClick={() => addTask(newTask)}>add task</button>
            {tasks.map(task =>
                <div>
                    {task.task}
                    <button onClick={() => del(task.id)}>delete</button>
                    <button>done</button>
                </div>
            )}

        </div>
    );
};

export default Todo;