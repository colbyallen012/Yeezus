import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import * as constants from './ApiCalls.js';

describe('App', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<App />)
    instance = wrapper.instance()
  })

  it ('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})