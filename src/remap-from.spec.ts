import { expect } from 'chai';
import { remapFrom } from './remap-from';

describe('remapFrom', () => {
  it('remaps from path', () => {
    const object = { a: { b: 1 } };
    const expected = { B: 1 };
    const actual = remapFrom('a', { B: 'b' })(object);

    expect(actual).to.eql(expected);
  });
});
