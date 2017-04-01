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
export declare function assocPath<T>(fullPath: Path, value: any, fullObj: any): T;
