import React, { useState } from 'react'
import CheckCircle from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const Todo = ({ todo, toggleComplete, handleDelete, handleEdit, }) => {

    const [newTitle, setNewTitle] = useState(todo.title)
    const handleChange = (e) => {
        e.preventDefault();
        if (todo.complete === true) {
            setNewTitle(todo.title);
        } else {
            todo.title = "";
            setNewTitle(e.target.value);
        }
    }

    return (

        <div className='todo'>
            <DoubleArrowIcon />
            <input
                style={{ textDecoration: todo.completed && "line-through" }}
                type="text"
                value={todo.title === "" ? newTitle : todo.title}
                className="list"
                onChange={handleChange}
            />
            <div className='todo__button'>
                <button
                    className='button-complete'
                    onClick={() => toggleComplete(todo)}
                >
                    <CheckCircle />
                </button>
                <button
                    className='button-edit'
                    onClick={() => handleEdit(todo, newTitle)}
                >
                    <EditIcon />
                </button>
                <button
                    className='button-delete'
                    onClick={() => handleDelete(todo.id)}
                >
                    <DeleteIcon />
                </button>
            </div>
        </div>

    )
}

export default Todo

// @mui/material