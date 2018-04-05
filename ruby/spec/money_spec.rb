require 'spec_helper'

describe 'Money' do
  describe 'Multiplication' do
    it do
      five = Money.dollar(5)
      expect(five.times(2)).to eq(Money.dollar(10))
      expect(five.times(3)).to eq(Money.dollar(15))
    end
  end

  describe 'Equality' do
    it do
      expect(Money.dollar(5)).to eq(Money.dollar(5))
      expect(Money.dollar(5)).to_not eq(Money.dollar(6))
      expect(Money.franc(5)).to_not eq(Money.dollar(5))
    end
  end

  describe 'Currency' do
    it do
      expect(Money.dollar(1).currency).to eq('USD')
      expect(Money.franc(1).currency).to eq('CHF')
    end
  end

  describe 'SimpleAddition' do
    it do
      five = Money.dollar(5)
      sum = five + five

      bank = Bank.new
      reduced = bank.reduce(sum, 'USD')
      expect(reduced).to eq(Money.dollar(10))
    end
  end

  describe 'PlusReturnsSum' do
    it do
      five = Money.dollar(5)
      sum = five + five
      expect(sum.augend).to eq(five)
      expect(sum.addend).to eq(five)
    end
  end

  describe 'ReduceSum' do
    it do
      sum = Sum.new(Money.dollar(3), Money.dollar(4))
      bank = Bank.new
      result = bank.reduce(sum, 'USD')
      expect(result).to eq(Money.dollar(7))
    end
  end

  describe 'ReduceMoney' do
    it do
      bank = Bank.new
      result = bank.reduce(Money.dollar(1), 'USD')
      expect(result).to eq(Money.dollar(1))
    end
  end

  describe 'ReduceMoneyDifferenctCurrenty' do
    it do
      bank = Bank.new
      bank.add_rate('CHF', 'USD', 2)
      result = bank.reduce(Money.franc(2), 'USD')
      expect(result).to eq(Money.dollar(1))
    end
  end

  describe 'IdentityRate' do
    it do
      expect(Bank.new.rate('USD', 'USD')).to eq(1)
    end
  end
end
