import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai'

import ContactList from '../lib/components/ContactList'
import ContactProfile from '../lib/components/ContactProfile'

describe('<ContactList />', () => {

  it('renders a <ContactList /> component', () => {
    const wrapper = mount(<ContactList contacts={[]}/>);
    expect(wrapper.find(ContactList)).to.have.length(1);
  });

  it('mounts with a contactProfile state of empty string', () => {
    const wrapper = shallow(<ContactList contacts={[]}/>);
    expect(wrapper.state('contactProfile')).to.equal('')
  })

  it('renders a <ContactProfile/> component if contactProfile state is not null', () => {
    const wrapper = shallow(<ContactList contacts={[]} />);
    wrapper.setState({ contactProfile: { name: 'test' }})
    expect(wrapper.find('ContactProfile')).to.have.length(1);
  });

  it('should set state when a contact is clicked', () => {
    const wrapper = shallow(<ContactList contacts={['contact']} />);
    wrapper.find('#contact-card').simulate('click');
    expect(wrapper.state('contactProfile')).to.equal('contact')
  })

  it('allows us to set props', () => {
    const wrapper = mount(<ContactList prop='thing' contacts={[]} />);
    expect(wrapper.props().prop).to.equal("thing");
    wrapper.setProps({ prop: "different-thing" });
    expect(wrapper.props().prop).to.equal("different-thing");
  });

});

describe('<ContactProfile />', () => {

  it('renders a <ContactProfile /> component', () => {
    const wrapper = mount(<ContactProfile contact={[]}/>);
    expect(wrapper.find(ContactProfile)).to.have.length(1);
  });

  it('mounts with a followUp state of its contact propert', () => {
    const wrapper = shallow(<ContactProfile contact={{followUp: true }}/>);
    expect(wrapper.state('followUp')).to.equal(true)
  })

  it('mounts with an edit state defaulted to false', () => {
    const wrapper = shallow(<ContactProfile contact={[]} />);
    expect(wrapper.state('edit')).to.equal(false);
  });

  it('allows us to set props', () => {
    const wrapper = mount(<ContactProfile prop='thing' contact={[]} />);
    expect(wrapper.props().prop).to.equal("thing");
    wrapper.setProps({ prop: "different-thing" });
    expect(wrapper.props().prop).to.equal("different-thing");
  });

  it('has 13 profile record elements', () => {
    const wrapper = shallow(<ContactProfile contact={[]} />);
    expect(wrapper.find('.contact-profile-record')).to.have.length(13);
  });

  it('contains a button to close form that is clickable', () => {
    const handleClick = sinon.spy()
    const wrapper = shallow(<ContactProfile contact={[]} handleClick={handleClick}/>);
    wrapper.find('.button').simulate('click');
    expect(handleClick.calledOnce).to.equal(true)
  })

  //test works up to point of calling to firebase, spy not working as intended

  // it('contains a checkbox that toggles state of followUp', () => {
  //   sinon.spy(ContactProfile.prototype, 'handleChange')
  //   const handleChange = sinon.spy()
  //   const wrapper = shallow(<ContactProfile handleChange={handleChange} user={{user: 'Ted', uid: 123}} contact={{ followUp: false }} />);
  //   wrapper.find('#checkbox-contact-profile').simulate('change')
  //    expect(ContactProfile.prototype.handleChange.calledOnce).to.equal(true)
  // })

});
