import { Money, Expression, Sum } from './index';

class Bank {
  public reduce(source: Expression, to: string): Money {
    const sum = <Sum> source;
    return sum.reduce(to);
  }
}
export default Bank;
