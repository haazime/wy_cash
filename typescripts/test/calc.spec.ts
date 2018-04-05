import { expect } from 'chai';
import Calc from '../src/calc';

describe('Calc', () => {
  it('', () => {
    const calc = new Calc();
    const r = calc.add(1, 2);
    expect(r).to.equal(3);
  })

  it('', () => {
    const calc = new Calc();
    const r = calc.add(2, 3);
    expect(r).to.equal(5);
  })
})
