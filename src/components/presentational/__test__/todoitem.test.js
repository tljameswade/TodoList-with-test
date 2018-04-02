import React from 'react';
import TodoItem from '../todoitem';
import { shallow } from 'enzyme';

it('Todo item renders without crashing', () => {
  const wrapper = shallow(<TodoItem text={'task1'} completed={false} handleClick={_ => _} />);
  expect(wrapper).toHaveLength(1);
});

it('Todo item should render correct styles when completed is false', () => {
    const wrapper = shallow(<TodoItem text={'task1'} completed={false} handleClick={_ => _} />);
    const itemStyle = wrapper.prop('style');
    const expectedStyle = {textDecoration: 'none'}
    expect(itemStyle).toEqual(expectedStyle);
});

it('Todo item should render correct styles when completed is true', () => {
    const wrapper = shallow(<TodoItem text={'task1'} completed={true} handleClick={_ => _} />);
    const itemStyle = wrapper.prop('style');
    const expectedStyle = {textDecoration: 'line-through'}
    expect(itemStyle).toEqual(expectedStyle);
});