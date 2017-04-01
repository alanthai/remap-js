import { expect } from 'chai';
import { toPairs } from './to-pairs';

describe('toPairs()', () => {
  it('converts an object into an array of key-value pairs', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(toPairs(obj)).to.eql([['a', 1], ['b', 2], ['c', 3]]);
  });
});
