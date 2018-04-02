require 'money'

class Franc < Money

  def times(multiplier)
    self.class.new(@amount * multiplier)
  end
end
