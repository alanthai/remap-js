import { expect } from 'chai';
import { remapArray } from './remap-array';

describe('remapArray()', () => {
  it('remaps arrays given object path', () => {
    const object = { a: [{ b: 1 }, { b: 2 }] };
    const expected = [{ c: 1 }, { c: 2 }];
    const actual = remapArray('a', { c: 'b' })(object);

    expect(actual).to.eql(expected);
  });

  it('allows functions that pass object and index', () => {
    const object = { a: [{ b: 1 }, { b: 2 }] };
    const expected = [{ c: '1-0' }, { c: '2-1' }];
    const arrayMapping = { c: (item, index) => `${item.b}-${index}` };
    const actual = remapArray('a', arrayMapping)(object);

    expect(actual).to.eql(expected);
  });
});
