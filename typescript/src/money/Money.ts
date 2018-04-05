import { Dollar, Franc } from './index';

abstract class Money {
  public amount: number;

  public abstract times(multiplier: number): Money;

  public static dollar(amount: number): Dollar {
    return new Dollar(amount);
  }

  public static franc(amount: number): Franc {
    return new Franc(amount);
  }

  constructor() {
    this.amount = 0;
  }

  public equals(other: Object): boolean {
    const money: Money = <Money> other;
    return this.amount == money.amount && this.constructor.toString() == money.constructor.toString();
  }
}
export default Money;
