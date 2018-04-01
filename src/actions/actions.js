import ACTIONS from './index';
import uuidv1 from 'uuid/v1';

export const add_todo = (text) => {
    return {
        type: ACTIONS.ADD_NEW_TODO,
        id: uuidv1(),
        text
    }
}

export const toggle_todo = (id) => {
    return {
        type: ACTIONS.TOGGLE_TODO,
        id
    }
}

export const set_filter = (filter) => {
    return {
        type: ACTIONS.SET_FILTER,
        filter
    }
}