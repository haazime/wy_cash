import Money from './Money';

class Dollar extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }

  public times(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier);
  }
}
export default Dollar;
