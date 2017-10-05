import {primeFactors} from './prime-factors';

describe('prime factors', () => {
  it('canary test verifies the test infrastructure', () => {
    true.should.be.true();
  });
  
  describe('of', () => {
    it('1 should be []', () => {
      primeFactors(1).should.deepEqual([]);
    });
    it('2 should be [2]', () => {
      primeFactors(2).should.deepEqual([2]);
    });
    it('3 should be [3]', () => {
      primeFactors(3).should.deepEqual([3]);
    });
    it('4 should be [2,2]', () => {
      primeFactors(4).should.deepEqual([2, 2]);
    });
    it('5 should be [5]', () => {
      primeFactors(5).should.deepEqual([5]);
    });
    it('6 should be [2,3]', () => {
      primeFactors(6).should.deepEqual([2, 3]);
    });
    it('7 should be [7]', () => {
      primeFactors(7).should.deepEqual([7]);
    });
    it('8 should be [2,2,2]', () => {
      primeFactors(8).should.deepEqual([2, 2, 2]);
    });
    it('9 should be [3,3]', () => {
      primeFactors(9).should.deepEqual([3, 3]);
    });
    it('121 should be [11,11]', () => {
      primeFactors(121).should.deepEqual([11, 11]);
    });
  });
});
