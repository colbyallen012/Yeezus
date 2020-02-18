import React from 'react';
import { shallow } from 'enzyme';
import QuoteCard from './QuoteCard';

describe('QuoteCard', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<QuoteCard />)
    instance = wrapper.instance()
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})