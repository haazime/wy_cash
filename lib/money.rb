require 'bank'
require 'sum'

class Money
  class << self

    def dollar(amount)
      new(amount, 'USD')
    end

    def franc(amount)
      new(amount, 'CHF')
    end
  end

  attr_reader :amount, :currency

  def initialize(amount, currency)
    @amount = amount
    @currency = currency
  end

  def times(multiplier)
    self.class.new(@amount * multiplier, currency)
  end

  def +(other)
    Sum.new(self, other)
  end

  def reduce(bank, to)
    rate = bank.rate(currency, to)
    self.class.new(amount / rate, to)
  end

  def ==(other)
    self.currency == other.currency &&
      self.amount == other.amount
  end
end
