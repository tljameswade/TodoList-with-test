import React from 'react';

const AddTodo = ({addtodo}) => {
    let inputText;

    return (
    <div>
        <input type='text' placeholder='A new task' ref={node => inputText = node}/>
        {' '}
        <button onClick={() => {
            if (inputText.value === '') {
                return;
            }
            addtodo(inputText.value);
            inputText.value = '';
        }}>Add a new todo</button>
    </div>);
}

export default AddTodo;