import FilterLinks from '../filterlinks';
import React from 'react';
import { shallow } from 'enzyme';

it('FilterLinks and its children renders correctly', () => {
    const wrapper = shallow(<FilterLinks />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.children()).toHaveLength(5);
});