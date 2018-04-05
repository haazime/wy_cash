import { expect } from 'chai';
import { Money } from '../src/money/index';

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
      expect(Money.franc(5).equals(Money.dollar(5))).to.be.false;
    })
  })

  describe('testCurrency', () => {
    it('', () => {
      expect(Money.dollar(1).currency).to.equal('USD');
      expect(Money.franc(1).currency).to.equal('CHF');
    })
  })

  describe('testSimpleAddition', () => {
    it('', () => {
      const sum: Money = Money.dollar(5).plus(Money.dollar(5));
      expect(sum.equals(Money.dollar(10))).to.be.true;
    })
  })
})
