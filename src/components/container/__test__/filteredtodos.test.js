import FilteredToDos, { getVisibleTodos } from '../filteredtodos';
import { shallow } from 'enzyme';
import React from 'react';
import { createMockStore } from 'redux-test-utils';

it('Returns correct visible todos', () => {
    const allTodos = [
        {
            id: 1,
            text: 'task1',
            completed: false
        }, 
        {
            id: 2,
            text: 'task2',
            completed: true            
        },
        {
            id: 3,
            text: 'task3',
            completed: false
        }
    ];
    const filterAll = 'All';
    const filterCompleted = 'Completed';
    const filterIncomplete = 'InComplete';
    const expectedCompletedTodos = [
        {
            id: 2,
            text: 'task2',
            completed: true            
        }        
    ];
    const expectedInCompleteTodos = [
        {
            id: 1,
            text: 'task1',
            completed: false
        }, 
        {
            id: 3,
            text: 'task3',
            completed: false
        }       
    ];
    expect(getVisibleTodos(allTodos, filterAll)).toEqual(allTodos);
    expect(getVisibleTodos(allTodos, filterCompleted)).toEqual(expectedCompletedTodos);
    expect(getVisibleTodos(allTodos, filterIncomplete)).toEqual(expectedInCompleteTodos);
});

it('FilterToDos renders without crash', () => {
    const state = {
        todos: [],
        filter: 'All'
    }
    const store = createMockStore(state);
    const wrapper = shallow(<FilteredToDos store={store} />);
    expect(wrapper).toHaveLength(1);
});

