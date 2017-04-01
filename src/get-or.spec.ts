import { expect } from 'chai';
import { getOr } from './get-or';

describe('getOr', () => {
  it('gets value if value is not null or undefined', () => {
    const obj = { a: 1 };

    expect(getOr('a', 'orValue')(obj)).to.equal(1);
  });

  it('gets falsy values', () => {
    const obj = {
      a: 0,
      b: '',
      c: false,
    };

    expect(getOr('a', 'orValue')(obj)).to.equal(0);
    expect(getOr('b', 'orValue')(obj)).to.equal('');
    expect(getOr('c', 'orValue')(obj)).to.equal(false);
  })

  it('returns `or` value if value is null or undefined', () => {
    expect(getOr('a', 'orValue')({})).to.equal('orValue');
  });
});
