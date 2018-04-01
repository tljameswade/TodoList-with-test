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
        default:
            return state;
    }
}