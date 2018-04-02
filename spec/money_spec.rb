require 'spec_helper'

describe '通貨' do
  describe '掛け算' do
    it do
      five = Dollar.new(5)
      expect(five.times(2)).to eq(Dollar.new(10))
      expect(five.times(3)).to eq(Dollar.new(15))
    end
  end

  describe '同値性' do
    it do
      expect(Dollar.new(5)).to eq(Dollar.new(5))
      expect(Dollar.new(5)).to_not eq(Dollar.new(6))
      expect(Franc.new(5)).to eq(Franc.new(5))
      expect(Franc.new(5)).to_not eq(Franc.new(6))
      expect(Franc.new(5)).to_not eq(Dollar.new(5))
    end
  end

  describe 'フランの掛け算' do
    it do
      five = Franc.new(5)
      expect(five.times(2)).to eq(Franc.new(10))
      expect(five.times(3)).to eq(Franc.new(15))
    end
  end
end
