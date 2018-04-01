import ACTIONS from '../actions/index';

export const filter = (state = {filter: 'All'}, action) => {
    switch(action.type) {
        case ACTIONS.FILTER_TODO:
            return {
                filter: action.filter
            }
        default:
            return state;
    }
}