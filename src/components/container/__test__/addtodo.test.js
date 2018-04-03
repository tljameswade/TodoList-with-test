import AddToDo from '../addtodo';
import { shallow } from 'enzyme';
import React from 'react';
import { createMockStore } from 'redux-test-utils';

it('renders without crash', () => {
    const store = createMockStore({});
    const wrapper = shallow(<AddToDo store={store}/>);
    expect(wrapper).toHaveLength(1);
});

