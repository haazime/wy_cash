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

  def reduce(to)
    rate =
      if currency == 'CHF' && to == 'USD'
        2
      else
        1
      end
    self.class.new(amount / rate, to)
  end

  def ==(other)
    self.currency == other.currency &&
      self.amount == other.amount
  end
end
