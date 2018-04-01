import React from 'react';
import './todoitem.css';

const todo = ({text, completed, handleClick}) => {
    return (
        <li className='todoItem' onClick={handleClick} style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}>{text}</li>
    );
}

export default todo;