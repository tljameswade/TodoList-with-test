import Reducer from '../index';

it('should correctly returns the initial state', () => {
    expect(Reducer(undefined, {})).toEqual({
        filter: 'All',
        todos: []
    });
});