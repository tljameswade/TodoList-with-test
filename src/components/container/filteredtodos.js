import { connect } from 'react-redux';
import { toggle_todo } from '../../actions/actions';
import ToDoList from '../presentational/todolist';

export const getVisibleTodos = (todos, filter) => {
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
        todos: getVisibleTodos(state.todos, state.filter)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);