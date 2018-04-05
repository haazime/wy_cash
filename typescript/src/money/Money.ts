export default class Money {
  public amount: number;

  constructor() {
    this.amount = 0;
  }

  public equals(other: Object): boolean {
    const money: Money = <Money> other;
    return this.amount == money.amount && this.constructor.toString() == money.constructor.toString();
  }
}
