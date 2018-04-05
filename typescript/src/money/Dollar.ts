export default class Dollar {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  public equals(other: Dollar): boolean {
    return this.amount == other.amount;
  }
}
