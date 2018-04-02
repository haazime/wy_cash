require 'spec_helper'

describe '通貨' do
  describe '掛け算' do
    it do
      five = Dollar.new(5)
      product = five.times(2)
      expect(product.amount).to eq(10)

      product = five.times(3)
      expect(product.amount).to eq(15)
    end
  end
end
