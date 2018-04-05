import { Money, Expression, Sum } from './index';

class Bank {
  public reduce(source: Expression, to: string): Money {
    return source.reduce(to);
  }
}
export default Bank;
