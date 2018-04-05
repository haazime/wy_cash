import { Dollar, Franc } from './index';

abstract class Money {
  public amount: number;
  public currency: string;

  public abstract times(multiplier: number): Money;

  public static dollar(amount: number): Dollar {
    return new Dollar(amount, 'USD');
  }

  public static franc(amount: number): Franc {
    return new Franc(amount, 'CHF');
  }

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  public equals(other: Object): boolean {
    const money: Money = <Money> other;
    return this.amount == money.amount && this.constructor.toString() == money.constructor.toString();
  }
}
export default Money;
