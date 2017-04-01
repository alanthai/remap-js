import { withChild } from './with-child';
import { remap } from './remap';

/**
 * Remaps a nested array per element
 *
 * @param {string} strPath: dot-separated path.
 * @param {any} mapping
 * @param {any} obj: target object.
 * @returns {any} An object with shape specified.
 * @example
 *
 *   const object = { A: [{ B: 1 }, { B: 2 }] };
 *   remap({ a: remapArray('A', { b: 'B' }) }, object);
 *     // => { a: [{ b: 1 }, { b: 2 }], c: 3 }
 */
export function remapArray(strPath: string, mapping: any): any {
  return withChild(strPath, (items) => {
    if (!Array.isArray(items)) {
      throw Error('remapArray: path does not lead to array');
    }

    return items.map((item, index) => remap(mapping, item, index));
  });
}
