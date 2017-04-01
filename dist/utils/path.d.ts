import { Path } from './path.type';
/**
 * Returns a root or deeply nested value from an object
 *
 * @param {Path[]} arrayPath: path.
 * @param {any} v: object to traverse.
 * @returns {any} value at specified path
 */
export declare function path<T>(arrayPath: Path, v: any): T;
