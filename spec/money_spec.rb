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
    end
  end
end
