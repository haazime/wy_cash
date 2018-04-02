class Dollar
  attr_reader :amount

  def initialize(amount)
    @amount = amount
  end

  def times(count)
    @amount = @amount * count
  end
end
