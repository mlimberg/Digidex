import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai'

import Button from '../lib/components/Button.js';
import Login from '../lib/components/Login.js';

describe('<Button />', () => {

  it('should have a button element', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button')).to.have.length(1)
  })

  it('should have an id property', () => {
    const wrapper = shallow(<Button id='id'/>);
    expect(wrapper.prop('id')).to.equal('id')
  })

  it('should have a handleClick event', () => {
    const handleClick = sinon.spy()
    const wrapper = shallow(<Button handleClick={handleClick} />)
    wrapper.find('button').simulate('click');
    expect(handleClick.calledOnce).to.equal(true)
  })

})
