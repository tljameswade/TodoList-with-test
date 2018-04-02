import React from 'react';
import Link from '../link';
import { shallow } from 'enzyme';

it('Link component renders correctly', () => {
    const wrapper = shallow(<Link text={'task1'} handleClick={_ => _} />);
    expect(wrapper).toHaveLength(1);
});

it('Link component should call handleClick function after clicking', () => {
    const handleClick = jest.fn();
    const wrapper = shallow(<Link text={'task1'} handleClick={handleClick} />);
    wrapper.simulate('click');
    expect(handleClick).toHaveBeenCalledTimes(1);
});