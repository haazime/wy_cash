import { Expression, Sum } from './index';

class Money implements Expression {
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

  public times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }

  public plus(other: Money): Expression {
    return new Sum(this, other);
  }

  public reduce(to: string): Money {
    return this;
  }

  public equals(other: Object): boolean {
    const money: Money = <Money> other;
    return this.amount == money.amount && this.currency == money.currency;
  }
}
export default Money;
