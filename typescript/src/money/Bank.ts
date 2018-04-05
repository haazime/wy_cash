import { Money, Expression, Sum } from './index';
import RateTable from './RateTable';

class Bank {
  private rates: RateTable = new RateTable;

  public addRate(from: string, to: string, rate: number): void {
    this.rates.put(from, to, rate);
  }

  public rate(from: string, to: string): number {
    if (from == to) {
      return 1;
    }
    return this.rates.get(from, to);
  }

  public reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }
}
export default Bank;
