import { Money } from './index';

interface Expression {
  reduce(to: string): Money;
}
export default Expression;
