"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns a root or deeply nested value from an object
 *
 * @param {Path[]} arrayPath: path.
 * @param {any} v: object to traverse.
 * @returns {any} value at specified path
 */
function path(arrayPath, v) {
    if (!v) {
        return v;
    }
    var firstItem = arrayPath[0], restPath = arrayPath.slice(1);
    if (restPath.length === 0) {
        return v[firstItem];
    }
    return path(restPath, v[firstItem]);
}
exports.path = path;
//# sourceMappingURL=path.js.map