import React from 'react';
import ToDoItem from '../presentational/todoitem';
import { connect } from 'react-redux';

export const FilteredTodos = ({todos}) => {
    return (
        <div>
            {todos.map(todo =>
                <ToDoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />
            )}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, null)(FilteredTodos);