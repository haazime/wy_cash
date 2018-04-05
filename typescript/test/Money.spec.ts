import { expect } from 'chai';
import { Dollar, Franc, Money } from '../src/money/index';

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
      expect(new Franc(5).equals(new Franc(5))).to.be.true;
      expect(new Franc(5).equals(new Franc(6))).to.be.false;
    })
  })

  describe('testFrancMultiplication', () => {
    it('', () => {
      const five: Franc = new Franc(5);
      expect(five.times(2).equals(new Franc(10))).to.be.true;
      expect(five.times(3).equals(new Franc(15))).to.be.true;
    })
  })
})
