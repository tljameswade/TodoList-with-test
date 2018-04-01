import ACTIONS from '../actions/index';

export const filter = (state = 'All', action) => {
    switch(action.type) {
        case ACTIONS.SET_FILTER:
            return action.filter
        default:
            return state;
    }
}