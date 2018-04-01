import React from 'react';
import './link.css';

export const Link = ({text, handleClick}) => {
    return (
        <span className='link' onClick={handleClick}>
            {text}
        </span>
    );
}

export default Link;