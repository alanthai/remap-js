import { expect } from 'chai';
import { path } from './path';

describe('path', () => {
  it('selects a first-level prop', () => {
    const obj = { a: 1 };
    expect(path(['a'], obj)).to.equal(1);
  });

  it('selects a second-level prop', () => {
    const obj = { a: { b: 1 } };
    expect(path(['a', 'b'], obj)).to.equal(1);
  });

  it('selects a third-level prop', () => {
    const obj = { a: { b: { c: 1 } } };
    expect(path(['a', 'b', 'c'], obj)).to.equal(1);
  });

  it('selects a falsy value', () => {
    const obj = {
      a: false,
      b: 0,
      c: '',
      d: undefined,
    };

    expect(path(['a'], obj)).to.equal(false);
    expect(path(['b'], obj)).to.equal(0);
    expect(path(['c'], obj)).to.equal('');
    expect(path(['d'], obj)).to.equal(undefined);
  });

  it('returns undefined for non-existent props', () => {
    const obj = { a: 1 };

    expect(path(['b'], obj)).to.equal(undefined);
  });

  it('selects over arrays', () => {
    const arr = [1];

    expect(path([0], arr)).to.equal(1);
    expect(path(['0'], arr)).to.equal(1);
  });
});
