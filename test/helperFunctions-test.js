import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai'
import combineArrays from '../lib/components/Helpers/combineArrays'

describe('combineArrays()', () => {

  it.only('should return a single array', () => {
    let array1 = [{ firstName: 'Wayne', lastName: 'Gretzky', firebaseId: '123' }, { firstName: 'Tim', lastName: 'Taylor', firebaseId: '938' }]
    let array2 = [{ firstName: 'Tina', lastName: 'Turner', firebaseId: '763' }, { firstName: 'Wayne', lastName: 'Gretzky', firebaseId: '123' }]
    expect(combineArrays(array1, array2)).to.have.length(3)
  })


})
