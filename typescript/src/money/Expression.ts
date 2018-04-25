import { Money, Bank } from './index';

interface Expression {
  equals(other: Expression): boolean;
  reduce(bank: Bank, to: string): Money;
  plus(addend: Expression): Expression;
  times(multiplier: number): Expression;
}
export default Expression;
