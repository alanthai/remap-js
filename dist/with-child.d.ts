export interface WithChildFn {
    (obj: any): any;
}
/**
 * Evaluates a function on given path
 *
 * @param {string} strPath: dot-separated path.
 * @param {function} fn: called on mapped object
 * @param {any} obj: target object.
 * @returns {any}
 * @example
 *
 *   const object = { A: 1 };
 *   remap({ a: withChild('A', (item) => item + 1) }, object);
 *     // => { a: 2 }
 */
export declare function withChild(strPath: string, fn: Function): WithChildFn;
