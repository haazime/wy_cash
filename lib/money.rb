require 'dollar'

class Money
  class << self

    def dollar(amount)
      Dollar.new(amount, 'USD')
    end

    def franc(amount)
      Franc.new(amount, 'CHF')
    end
  end

  attr_reader :currency

  def initialize(amount, currency)
    @amount = amount
    @currency = currency
  end

  def ==(other)
    self.instance_of?(other.class) &&
      self.amount == other.amount
  end

  protected

    attr_reader :amount
end
