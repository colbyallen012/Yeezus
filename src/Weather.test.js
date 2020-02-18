import React from 'react';
import { shallow } from 'enzyme';
import Weather from './Weather';

describe('Weather', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<Weather />)
    instance = wrapper.instance()
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})