import { expect } from 'chai';
import { init } from './init';

describe('init()', () => {
  it('gets all but last element', () => {
    const array = [1, 2, 3];

    expect(init(array)).to.eql([1, 2]);
  });

  it('returns empty on empty array', () => {
    expect(init([])).to.eql([]);
  });
});
