require 'dollar'

class Money
  class << self

    def dollar(amount)
      Dollar.new(amount)
    end
  end

  def initialize(amount)
    @amount = amount
  end

  def ==(other)
    self.instance_of?(other.class) &&
      self.amount == other.amount
  end

  protected

    attr_reader :amount
end
