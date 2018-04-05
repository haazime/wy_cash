import { expect } from 'chai';
import { Dollar, Franc, Money } from '../src/money/index';

describe('Money', () => {
  describe('testMultiplication', () => {
    it('', () => {
      const five: Money = Money.dollar(5);
      expect(five.times(2).equals(Money.dollar(10))).to.be.true;
      expect(five.times(3).equals(Money.dollar(15))).to.be.true;
    })
  })

  describe('testEquality', () => {
    it('', () => {
      expect(Money.dollar(5).equals(Money.dollar(5))).to.be.true;
      expect(Money.dollar(5).equals(Money.dollar(6))).to.be.false;
      expect(new Franc(5).equals(new Franc(5))).to.be.true;
      expect(new Franc(5).equals(new Franc(6))).to.be.false;
      expect(new Franc(5).equals(Money.dollar(5))).to.be.false;
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
