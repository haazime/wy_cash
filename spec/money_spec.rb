require 'spec_helper'

describe '通貨' do
  describe '掛け算' do
    it do
      five = Dollar.new(5)
      five.times(2)
      expect(five.amount).to eq(10)
    end
  end
end
