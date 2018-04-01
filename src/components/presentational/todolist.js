import React from 'react';
import ToDoItem from './todoitem';

const TodoList = ({todos, toggleTodo}) => {
    return (
        <div>
            {todos.map(todo =>
                <ToDoItem key={todo.id} text={todo.text} completed={todo.completed} handleClick={() => toggleTodo(todo.id)} />
            )}
        </div>
    );
}

export default TodoList;