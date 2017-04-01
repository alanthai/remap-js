import { Path } from './path.type';

/**
 * Sets a value of a root level or nested property, making shallow copies
 * each object it travels.
 * 
 * @param {string[]} fullPath: path to follow.
 * @param {any} value: value to set.
 * @param {Object} fullObj: object to operate on.
 * @returns {Object} A new object with value set.
 */
export function assocPath<T>(fullPath: Path, value: any, fullObj: any): T {
  const newObj = { ...fullObj };

  (function _assocPath(path: Path, v: any) {
    const [ firstItem, ...restPath ] = path;

    if (restPath.length === 0) {
      v[firstItem] = value;    
    } else {
      v[firstItem] = typeof v[firstItem] === 'object' && v[firstItem] !== null
        ? { ...v[firstItem] }
        : {};

      _assocPath(restPath, v[firstItem]);
    }
  })(fullPath, newObj);

  return newObj;
}
