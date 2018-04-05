class Money {
  public amount: number;
  public currency: string;

  public static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  public static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  public equals(other: Object): boolean {
    const money: Money = <Money> other;
    return this.amount == money.amount && this.currency == money.currency;
  }

  public times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }

  public plus(other: Money): Money {
    return new Money(this.amount + other.amount, this.currency);
  }
}
export default Money;
