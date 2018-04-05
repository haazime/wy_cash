import Money from './Money';

class Franc extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }

  public times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier);
  }
}
export default Franc;
