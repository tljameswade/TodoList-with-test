import React from 'react';
import ToDoItem from '../presentational/todoitem';
import { connect } from 'react-redux';
import { toggle_todo } from '../../actions/actions';

export const FilteredTodos = ({filter, todos, toggleTodo}) => {
    return (
        <div>
            {getVisibleTodos(todos, filter).map(todo =>
                <ToDoItem key={todo.id} text={todo.text} completed={todo.completed} handleClick={() => toggleTodo(todo.id)} />
            )}
        </div>
    );
}

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case 'Completed':
            return todos.filter(todo => todo.completed);
        case 'InComplete':
            return todos.filter(todo => !todo.completed);
        default:
            return todos;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: (id) => dispatch(toggle_todo(id))
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        filter: state.filter.filter
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilteredTodos);