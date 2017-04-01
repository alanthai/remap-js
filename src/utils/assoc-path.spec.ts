import { expect } from 'chai';
import { assocPath } from './assoc-path';

describe('assocPath()', () => {
  it('sets a first-level prop', () => {
    const obj = {};

    expect(assocPath(['a'], 1, obj)).to.eql({ a: 1 });
  });

  it('sets a second-level prop', () => {
    const obj = { a: {} };

    expect(assocPath(['a', 'b'], 1, obj)).to.eql({ a: { b: 1 } });
  });

  it('sets a third-level prop', () => {
    const obj = { a: { b: {} } };

    expect(assocPath(['a', 'b', 'c'], 1, obj)).to.eql({ a: { b: { c: 1 } } });
  });

  it('overrides value if one exists', () => {
    const obj = { a: 1 };

    expect(assocPath(['a'], 2, obj)).to.eql({ a: 2 });
  });

  it('it creates new paths that do not exist', () => {
    const obj = {};

    expect(assocPath(['a', 'b'], 1, obj)).to.eql({ a: { b: 1 } });
  });

  it('overrides non-objects', () => {
    const obj = { a: 1 };

    expect(assocPath(['a', 'b'], 2, obj)).to.eql({ a: { b: 2 } });
  });
});
