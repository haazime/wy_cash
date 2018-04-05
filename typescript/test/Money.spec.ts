import { expect } from 'chai';
import Dollar from '../src/Dollar';

describe('Money', () => {
  describe('testMultiplication', () => {
    it('', () => {
      const five: Dollar = new Dollar(5);
      expect(five.times(2).equals(new Dollar(10))).to.be.true;
      expect(five.times(3).equals(new Dollar(15))).to.be.true;
    })
  })

  describe('testEquality', () => {
    it('', () => {
      expect(new Dollar(5).equals(new Dollar(5))).to.be.true;
      expect(new Dollar(5).equals(new Dollar(6))).to.be.false;
    })
  })
})
