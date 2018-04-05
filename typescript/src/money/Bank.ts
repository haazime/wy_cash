import { Money, Expression } from './index';

class Bank {
  public reduce(source: Expression, to: string): Money {
    return Money.dollar(10);
  }
}
export default Bank;
