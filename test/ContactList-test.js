import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai'
import ContactList from '../lib/components/ContactList'

describe('<ContactList />', () => {

  it('renders a <ContactList /> component', () => {
    const wrapper = shallow(<ContactList />);
    expect(wrapper.find(contactProfile)).to.have.length(1)
  });

});
