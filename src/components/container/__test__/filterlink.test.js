import FilterLink from '../filterlink';
import { shallow } from 'enzyme';
import React from 'react';
import { createMockStore } from 'redux-test-utils';

it('FilterLink renders correctly without crash', () => {
    const store = createMockStore({});
    const wrapper = shallow(<FilterLink store={store} />);
    expect(wrapper).toHaveLength(1);
});