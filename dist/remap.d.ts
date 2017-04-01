/**
 * Changes the shape of an object, as specified by a mapping object.
 *
 * @param {any} mapping: the shape of this object will be the shape
 *   of the returned object. Its values are a dot-separated path
 *   from the source object, or a function to compute the its value
 * @param {any} source: object to remap from
 * @param {any} context (optional): if a function is passed, the second argument
 *   will be passed this value
 * @returns {any}
 * @example
 *
 *   const object = { A: 1, B: 2, C: { D: 3 }, E: 4, f: 5 };
 *   remap({
 *     a: 'A',
 *     b: { c: 'B' },
 *     d: 'C.D',
 *     e: (obj) => obj.E,
 *     f: ''
 *   }, object);
 *   => { a: 1, b: { c: 2 }, d: 3, e: 4, f: 5 }
 */
export declare function remap<R>(mapping: any, source: any, context?: any): R;
