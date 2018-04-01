import { todos } from './todos';
import { filter } from './filter';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    todos,
    filter
});

export default reducer;