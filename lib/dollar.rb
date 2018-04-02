class Dollar

  def initialize(amount)
    @amount = amount
  end

  def times(multiplier)
    self.class.new(@amount * multiplier)
  end

  def ==(other)
    self.amount == other.amount
  end

  protected

    attr_reader :amount
end
