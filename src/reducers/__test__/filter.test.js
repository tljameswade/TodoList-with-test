import ActionTypes from '../../actions/index';
import { filter } from '../filter';

it('should return the correct initial state', () => {
    expect(filter(undefined, {})).toEqual('All');
});

it('should set to the correct filter as a new state', () => {
    const newFilter = 'Completed';
    expect(filter(undefined, {
        type: ActionTypes.SET_FILTER,
        filter: newFilter
    })).toEqual(newFilter);
});