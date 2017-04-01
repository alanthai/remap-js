import { path } from './utils';

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
export function withChild(strPath: string, fn: Function): WithChildFn {
  const arrayPath = strPath.split('.');

  return (obj: any) => fn(path(arrayPath, obj));
}
