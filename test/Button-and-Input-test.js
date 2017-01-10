import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai'

import Button from '../lib/components/Button.js';
import Input from '../lib/components/Input.js';

describe('<Button />', () => {

  it('should have a button element', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button')).to.have.length(1)
  })

  it('allows us to set props', () => {
    const wrapper = mount(<Button prop="thing" />);
    expect(wrapper.props().prop).to.equal("thing");
    wrapper.setProps({ prop: "different-thing" });
    expect(wrapper.props().prop).to.equal("different-thing");
  });

  it('should have a handleClick event', () => {
    const handleClick = sinon.spy()
    const wrapper = shallow(<Button handleClick={handleClick} />)
    wrapper.find('button').simulate('click');
    expect(handleClick.calledOnce).to.equal(true)
  })

})

describe('<Input />', () => {

  it('should have an input element', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find('input')).to.have.length(1)
  })

  it('allows us to set props', () => {
    const wrapper = mount(<Input prop="thing" />);
    expect(wrapper.props().prop).to.equal("thing");
    wrapper.setProps({ prop: "different-thing" });
    expect(wrapper.props().prop).to.equal("different-thing");
  });

  it('should have an onChange event', () => {
    const handleChange = sinon.spy()
    const wrapper = shallow(<Input handleChange={handleChange} />)
    wrapper.find('input').simulate('change');
    expect(handleChange.calledOnce).to.equal(true)
  })

})
