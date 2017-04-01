/**
 * Returns array of key-value pairs
 *
 * @param {any} obj
 * @returns {[string, any][]}
 */
export function toPairs(obj: any): [string, any][] {
  const pairs = [];

  for (let k in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, k)) {
      pairs.push([k, obj[k]]);
    }
  }

  return pairs;
}
