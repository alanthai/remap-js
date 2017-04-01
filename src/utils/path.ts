import { Path } from './path.type';

/**
 * Returns a root or deeply nested value from an object
 *
 * @param {Path[]} arrayPath: path.
 * @param {any} v: object to traverse.
 * @returns {any} value at specified path
 */
export function path<T>(arrayPath: Path, v: any): T {
  if (!v) {
    return v;
  }

  const [ firstItem, ...restPath ] = arrayPath;

  if (restPath.length === 0) {
    return v[firstItem];
  }

  return path<T>(restPath, v[firstItem]);
}
