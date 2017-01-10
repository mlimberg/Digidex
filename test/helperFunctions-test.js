import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai'
import combineArrays from '../lib/components/Helpers/combineArrays'

describe('combineArrays()', () => {

  it('should return a single array', () => {
    let array1 = [1, 2, 3, 4]
    let array2 = [3, 4, 5, 6]
    expect(combineArrays(array1, array2)).to.have.length(6)
  })


})
