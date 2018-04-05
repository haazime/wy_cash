import { Money, Expression, Sum } from './index';

class Bank {
  public addRate(from: string, to: string, rate: number) {
  }

  public rate(from: string, to: string): number {
    if (from == 'CHF' && to == 'USD') {
      return 2;
    }
    return 1;
  }

  public reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }
}
export default Bank;
