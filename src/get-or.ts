import { withChild } from './with-child';

/**
 * Gets value at path, or returns default value
 *
 * @param {string} strPath: dot-separated path.
 * @param {any} defaultValue
 * @param {any} obj: target object.
 * @returns {any} value or defaultValue
 * @example
 *
 *   const object = {};
 *   remap({ a: getOr('A', 1) }, object);
 *     // => { a: 2 }
 */
export function getOr(strPath: string, defaultValue: any): any {
  return withChild(strPath, (value) => value != null ? value : defaultValue);
}
