import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai'

import ContactList from '../lib/components/ContactList.js';

describe('<ContactList />', () => {

  it('renders a <ContactList /> component', () => {
    const wrapper = mount(<ContactList contacts={[]}/>);
    expect(wrapper.find(ContactList)).to.have.length(1);
  });

  it.skip('renders has a <SignInPage/> component', () => {
    const wrapper = mount(<ContactList contacts={[]}/>);
    expect(wrapper.find(ContactProfile)).to.have.length(1);
  });



});
