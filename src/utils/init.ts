/**
 * Returns all but the last element in an array
 *
 * @param {any[]} a
 * @returns {any[]}
 */
export function init<T>(a: T[]): T[] {
  return a.slice(0, -1);
}
