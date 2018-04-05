class RateTable {
  private rates: { [key: string]: number } = {};

  public put(from: string, to: string, rate: number) {
    this.rates[this.generateKey(from, to)] = rate;
  }

  public get(from: string, to: string): number {
    return this.rates[this.generateKey(from, to)];
  }

  private generateKey(from: string, to: string): string {
    return `${from}_${to}`;
  }
}
export default RateTable;
