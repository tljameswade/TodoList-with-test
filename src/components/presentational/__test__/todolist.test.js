import React from 'react';
import TodoList from '../todolist';
import { shallow } from 'enzyme';

it('Todo list renders without crashing', () => {
  const wrapper = shallow(<TodoList todos={[]} toggleTodo={_ => _}/>);
  expect(wrapper).toHaveLength(1);
});

it('Todo list renders correct amount of to do items', () => {
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
});