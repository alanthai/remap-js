/**
 * Returns the last element in an array
 *
 * @param {any[]} a
 * @returns {any}
 */
export function last<T>(a: T[]): T {
  return a[a.length - 1];
}
