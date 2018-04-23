import { Expression, Money, Bank } from './index';

class Sum implements Expression {
  public augend: Expression;
  public addend: Expression;

  constructor(augend: Expression, addend: Expression) {
    this.augend = augend;
    this.addend = addend;
  }

  public reduce(bank: Bank, to: string): Money {
    const amount = this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;
    return new Money(amount, to);
  }

  public plus(addend: Expression): Expression {
    return addend;
  }

  public equals(other: Expression): boolean {
    return false;
  }
}
export default Sum;
