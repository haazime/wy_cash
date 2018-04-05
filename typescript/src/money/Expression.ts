import { Money, Bank } from './index';

interface Expression {
  reduce(bank: Bank, to: string): Money;
}
export default Expression;
