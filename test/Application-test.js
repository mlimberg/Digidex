import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai'

import Main from '../lib/components/Main.js';
import Button from '../lib/components/Button.js';
import Login from '../lib/components/Login.js';


describe('<Main />', () => {

  it('renders a <Main /> component', () => {
    const wrapper = mount(<Main/>);
    expect(wrapper.find(Main)).to.have.length(1);
  });

  it('mounts with a followUp state of false', () => {
    const wrapper = shallow(<Main/>);
    expect(wrapper.state('followUp')).to.equal(false)
  })

  it('mounts with a user state of null', () => {
    const wrapper = shallow(<Main/>);
    expect(wrapper.state('user')).to.equal(null)
  })

  it('mounts with a contacts state equal to an empty array', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.state('contacts')).to.deep.equal([])
  })

  it('mounts without text in the filterText state ', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.state('filterText')).to.equal('')
  })

  it('renders a <SignInPage/> component', () => {
    const wrapper = shallow(<Main/>);
    expect(wrapper.find('SignInPage')).to.have.length(1);
  });

  it('allows us to set props', () => {
    const wrapper = mount(<Main prop="thing" />);
    expect(wrapper.props().prop).to.equal("thing");
    wrapper.setProps({ prop: "different-thing" });
    expect(wrapper.props().prop).to.equal("different-thing");
  });

  it('contains a header', () => {
    const wrapper = mount(<Main />);
    expect(wrapper.contains(<h1 id='main-header'>DigiDex</h1>)).to.equal(true)
  })

  it('contains a Button component that is clickable', () => {
    const handleClick = sinon.spy()
    const wrapper = mount(<Button handleClick={handleClick}/>);
    wrapper.find('button').simulate('click');
    expect(handleClick.calledOnce).to.equal(true)
  })

  it('has a Login component for sign-out', () => {
    const wrapper = mount(<Main />);
    expect(wrapper.find('Login')).to.have.length(1);
  })

});
