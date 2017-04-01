import { expect } from 'chai';
import { remap } from './remap';

describe('remap', () => {
  it('remaps shallow objects', () => {
    const mapping = { a: 'b' };
    const object = { b: 1 };
    const expected = { a: 1 };
    const actual = remap(mapping, object);

    expect(actual).to.eql(expected);
  });

  it('remaps from deep objects', () => {
    const mapping = { a: 'b.c' };
    const object = { b: { c: 1 } };
    const expected = { a: 1 };
    const actual = remap(mapping, object);

    expect(actual).to.eql(expected);
  });

  it('remaps to deep objects', () => {
    const mapping = { a: { b: 'c' } };
    const object = { c: 1 };
    const expected = { a: { b: 1 } };
    const actual = remap(mapping, object);

    expect(actual).to.eql(expected);
  });

  it('allows function mappings', () => {
    const mapping = { a: (obj) => obj.b };
    const object = { b: 1 };
    const expected = { a: 1 };
    const actual = remap(mapping, object);

    expect(actual).to.eql(expected);
  });

  it('uses same path if mapping is empty string', () => {
    const mapping = { a: '' };
    const object = { a: 1, b: 2 };
    const expected = { a: 1 };
    const actual = remap(mapping, object);

    expect(actual).to.eql(expected);
  });
});