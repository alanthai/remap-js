"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
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
function withChild(strPath, fn) {
    var arrayPath = strPath.split('.');
    return function (obj) { return fn(utils_1.path(arrayPath, obj)); };
}
exports.withChild = withChild;
//# sourceMappingURL=with-child.js.map