require 'bank'

class Money
  class << self

    def dollar(amount)
      new(amount, 'USD')
    end

    def franc(amount)
      new(amount, 'CHF')
    end
  end

  attr_reader :currency

  def initialize(amount, currency)
    @amount = amount
    @currency = currency
  end

  def times(multiplier)
    self.class.new(@amount * multiplier, currency)
  end

  def +(other)
    self.class.new(@amount + other.amount, currency)
  end

  def ==(other)
    self.currency == other.currency &&
      self.amount == other.amount
  end

  protected

    attr_reader :amount
end
