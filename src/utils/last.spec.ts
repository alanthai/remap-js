import { expect } from 'chai';
import { last } from './last';

describe('last()', () => {
  it('gets last element of an array', () => {
    const array = ['a', 'b', 'c'];
    expect(last(array)).to.equal('c');
  });

  it('returns undefined for empty array', () => {
    expect(last([])).to.equal(undefined);
  });
});
