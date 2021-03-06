import { expect } from 'chai';
import { Money, Expression, Bank, Sum } from '../src/money/index';

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
      const five: Money = Money.dollar(5);
      const sum: Expression = five.plus(five);
      const bank: Bank = new Bank;
      const reduced: Money = bank.reduce(sum, 'USD');
      expect(reduced.equals(Money.dollar(10))).to.be.true;
    })
  })

  describe('testPlusReturnsSum', () => {
    it('', () => {
      const five: Money = Money.dollar(5);
      const result: Expression = five.plus(five);
      const sum: Sum = <Sum> result;
      expect(sum.augend.equals(five)).to.be.true;
      expect(sum.addend.equals(five)).to.be.true;
    })
  })

  describe('testReduceSum', () => {
    it('', () => {
      const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));
      const bank: Bank = new Bank;
      const result: Money = bank.reduce(sum, 'USD');
      expect(result.equals(Money.dollar(7))).to.be.true;
    })
  })

  describe('testReduceMoney', () => {
    it('', () => {
      const bank: Bank = new Bank;
      const result: Money = bank.reduce(Money.dollar(1), 'USD');
      expect(result.equals(Money.dollar(1))).to.be.true;
    })
  })

  describe('testReduceMoneyDifferentCurrency', () => {
    it('', () => {
      const bank: Bank = new Bank;
      bank.addRate('CHF', 'USD', 2);
      const result: Money = bank.reduce(Money.franc(2), 'USD');
      expect(result.equals(Money.dollar(1))).to.be.true;
    })
  })

  describe('testIdentityRate', () => {
    it('', () => {
      const bank: Bank = new Bank;
      expect(bank.rate('USD', 'USD')).to.equal(1);
    })
  })

  describe('testMixedAddition', () => {
    it('', () => {
      const fiveBucks: Expression = Money.dollar(5);
      const tenFrancs: Expression = Money.franc(10);
      const bank: Bank = new Bank;
      bank.addRate('CHF', 'USD', 2);
      const result: Money = bank.reduce(fiveBucks.plus(tenFrancs), 'USD');
      expect(result.equals(Money.dollar(10))).to.be.true;
    })
  })

  describe('testSumPlusMoney', () => {
    it('', () => {
      const fiveBucks: Expression = Money.dollar(5);
      const tenFrancs: Expression = Money.franc(10);
      const bank: Bank = new Bank;
      bank.addRate('CHF', 'USD', 2);
      const sum: Expression = new Sum(fiveBucks, tenFrancs).plus(fiveBucks);
      const result: Money = bank.reduce(sum, 'USD');
      expect(result.equals(Money.dollar(15))).to.be.true;
    })
  })

  describe('testSumTimes', () => {
    it('', () => {
      const fiveBucks: Expression = Money.dollar(5);
      const tenFrancs: Expression = Money.franc(10);
      const bank: Bank = new Bank;
      bank.addRate('CHF', 'USD', 2);
      const sum: Expression = new Sum(fiveBucks, tenFrancs).times(2);
      const result: Money = bank.reduce(sum, 'USD');
      expect(result.equals(Money.dollar(20))).to.be.true;
    })
  })

  describe('testPlusSameCurrency', () => {
    it('', () => {
      const sum: Expression = Money.dollar(1).plus(Money.dollar(1));
      const m = Money.dollar(1);
      expect(sum.constructor.toString()).to.eq(m.constructor.toString());
    })
  })
})
