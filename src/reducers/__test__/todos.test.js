import ActionTypes from '../../actions/index';
import { todos } from '../todos';

it('should return the correct initial state', () => {
    expect(todos(undefined, {})).toEqual([]);
});

it('should correctly add a new todo object to the state when add new todo action is dispatched', () => {
    const todo = {
        id: 1,
        text: 'task1',
        completed: false
    }
    expect(todos(undefined, {
        type: ActionTypes.ADD_NEW_TODO,
        id: 1,
        text: 'task1'
    })).toEqual([todo]);
});

it('should correctly toggles the state of an existing todo item', () => {
    const id = 1;
    const initialState = [
    {
        id: id,
        text: 'task1',
        completed: false
    }, {
        id: 2,
        text: 'task2',
        completed: false
    }];
    expect(todos(initialState, {
        type: ActionTypes.TOGGLE_TODO,
        id: id
    })).toEqual([
    {
        id: id,
        text: 'task1',
        completed: true
    }, {
        id: 2,
        text: 'task2',
        completed: false
    }]);
});

it('should returns the original state when actions types are not those above two types', () => {
    const id = 1;
    const initialState = [{
        id: id,
        text: 'task1',
        completed: false
    }];
    expect(todos(initialState, {
        type: 'RandomType',
    })).toEqual(initialState);
});