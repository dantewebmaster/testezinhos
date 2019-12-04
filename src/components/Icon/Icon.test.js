import React from 'react';
import { shallow, mount } from 'enzyme';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import Icon from '.';

describe('Home page init', () => {
  it('must renders welcome icon', () => {
    const icon = create(<Icon />);

    expect(icon).toMatchSnapshot()
  });

  it('onclick', () => {
    const icon = shallow(<Icon />);
    icon.simulate('click');
  })
});
