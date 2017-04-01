import { expect } from 'chai';
import { withChild } from './with-child';

describe('withChild', () => {
  it('function maps over a string path', () => {
    const object = { a: { b: 1 } };
    const result = withChild('a', (item) => item.b)(object);

    expect(result).to.equal(1);
  });
});
