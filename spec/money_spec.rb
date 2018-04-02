require 'spec_helper'

describe '金額' do
  describe '掛け算' do
    it do
      five = Money.dollar(5)
      expect(five.times(2)).to eq(Money.dollar(10))
      expect(five.times(3)).to eq(Money.dollar(15))
    end
  end

  describe '同値性' do
    it do
      expect(Money.dollar(5)).to eq(Money.dollar(5))
      expect(Money.dollar(5)).to_not eq(Money.dollar(6))
      expect(Money.franc(5)).to_not eq(Money.dollar(5))
    end
  end

  describe 'フランの掛け算' do
    it do
      five = Money.franc(5)
      expect(five.times(2)).to eq(Money.franc(10))
      expect(five.times(3)).to eq(Money.franc(15))
    end
  end

  describe '通貨' do
    it do
      expect(Money.dollar(1).currency).to eq('USD')
      expect(Money.franc(1).currency).to eq('CHF')
    end
  end

  describe '単純な加算' do
    it do
      five = Money.dollar(5)
      sum = five + five

      bank = Bank.new
      reduced = bank.reduce(sum, 'USD')
      expect(reduced).to eq(Money.dollar(10))
    end
  end
end
