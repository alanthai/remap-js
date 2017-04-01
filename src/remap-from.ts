import { withChild } from './with-child';
import { remap } from './remap';

/**
 * Remap from a nested path
 *
 * @param {string} strPath: dot-separated path.
 * @param {any} mapping
 * @param {any} obj: target object.
 * @returns {any} An object with shape specified.
 * @example
 *
 *   const object = { A: { B: { C: 1, D: 2 } } };
 *   remap({ a: remapFrom('A.B', { c: 'C', d: 'D' }) }, object);
 *     // => { a: { c: 1, d: 2 } }
 */
export function remapFrom(strPath: string, mapping: any): any {
  return withChild(strPath, (nestedObj) => remap(mapping, nestedObj));
}
