import * as actions from '../actions';
import * as types from '../index';

it('should launch a correct add todo function', () => {
    const text = 'task1';
    const expectedAction = {
        type: types.default.ADD_NEW_TODO,
        text
    }
    const launchedAction = actions.add_todo(text);
    expect(launchedAction.type).toEqual(expectedAction.type);
    expect(launchedAction.text).toEqual(expectedAction.text);
});

it('should launch a correct toggle todo function', () => {
    const id = 1;
    const expectedAction = {
        type: types.default.TOGGLE_TODO,
        id
    }
    const launchedAction = actions.toggle_todo(id);
    expect(launchedAction).toEqual(expectedAction);
});

it('should launch a correct set filter function', () => {
    const filter = 'Completed';
    const expectedAction = {
        type: types.default.SET_FILTER,
        filter
    }
    const launchedAction = actions.set_filter(filter);
    expect(launchedAction).toEqual(expectedAction);
})