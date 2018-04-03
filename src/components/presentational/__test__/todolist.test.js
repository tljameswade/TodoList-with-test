import React from 'react';
import TodoList from '../todolist';
import { shallow } from 'enzyme';

it('Todo list renders without crashing', () => {
  const wrapper = shallow(<TodoList todos={[]} toggleTodo={_ => _}/>);
  expect(wrapper).toHaveLength(1);
});

it('Todo list renders correct to do items', () => {
    const todos = [
        {
            id: 1,
            text: 'task1',
            completed: false
        }, {
            id: 2,
            text: 'task2',
            completed: true
        }
    ]
    const wrapper = shallow(<TodoList todos={todos} toggleTodo={_ => _} />);
    expect(wrapper.find('todo')).toHaveLength(2);
    expect(wrapper.childAt(0).prop('text')).toEqual('task1');
    expect(wrapper.childAt(0).prop('completed')).toEqual(false);
    expect(wrapper.childAt(1).prop('text')).toEqual('task2');
    expect(wrapper.childAt(1).prop('completed')).toEqual(true);
});