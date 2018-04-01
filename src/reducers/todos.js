import ACTIONS from '../actions/index';

export const todos = (state = [], action) => {
    switch(action.type) {
        case ACTIONS.ADD_NEW_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case ACTIONS.TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id === action.id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        default:
            return state;
    }
}