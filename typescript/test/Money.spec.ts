import { expect } from 'chai';
import Dollar from '../src/Dollar';

describe('Money', () => {
  describe('testMultiplication', () => {
    it('', () => {
      const five: Dollar = new Dollar(5);
      five.times(2);
      expect(five.amount).to.equal(10);
    })
  })
})
