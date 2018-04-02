class Money

  def initialize(amount)
    @amount = amount
  end

  def ==(other)
    self.amount == other.amount
  end

  protected

    attr_reader :amount
end
