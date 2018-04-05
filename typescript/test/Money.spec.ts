import { expect } from 'chai';
import Dollar from '../src/Dollar';

describe('Money', () => {
  describe('testMultiplication', () => {
    it('', () => {
      const five: Dollar = new Dollar(5);
      let product: Dollar = five.times(2);
      expect(product.amount).to.equal(10);
      product = five.times(3);
      expect(product.amount).to.equal(15);
    })
  })
})
