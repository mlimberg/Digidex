import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai'

import Main from '../lib/components/Main.js';

describe('<Main />', () => {

  it('renders a <Main /> component', () => {
    const wrapper = shallow(<Main/>);
    expect(wrapper.find('SignInPage')).to.have.length(1);
  });

});
