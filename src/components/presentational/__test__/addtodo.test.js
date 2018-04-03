import React from 'react';
import AddToDo from '../addtodo';
import { shallow, mount } from 'enzyme';
import TestUtils from 'react-dom/test-utils';

it('Add to do renders without crashing', () => {
  const wrapper = shallow(<AddToDo addtodo={_ => _} />);
  expect(wrapper).toHaveLength(1);
  expect(wrapper.children()).toHaveLength(3);
});

it('Click the button triggers addtodo method to be called when the input value is not empty, and not to be called when the input value is empty', () => {
    const addtodo = jest.fn();
    const addToDo = TestUtils.renderIntoDocument(<div>
        <AddToDo addtodo={addtodo} />
    </div>).children[0];
    
    const input = addToDo.children[0];
    const button =addToDo.children[1];
    expect(input.type).toEqual('text');
    expect(input.value).toEqual('');

    TestUtils.Simulate.click(button);
    expect(addtodo).not.toHaveBeenCalled();

    input.value = 'task1';
    TestUtils.Simulate.change(input);
    TestUtils.Simulate.click(button);
    expect(addtodo).toHaveBeenCalledTimes(1);
});