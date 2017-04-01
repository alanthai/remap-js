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
export declare function remapArray(strPath: string, mapping: any): any;
