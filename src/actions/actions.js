import { ACTIONS } from './index';

const uuidv1 = require('uuid/v1');

export const add_todo = (id, text) => {
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

export const filter_todo = (filter) => {
    return {
        type: ACTIONS.FILTER_TODO,
        filter
    }
}