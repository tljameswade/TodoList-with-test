import React from 'react';

const todo = ({id, text, completed}) => {
    return (
        <li className='todoItem' style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}>{text}</li>
    );
}

export default todo;