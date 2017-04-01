"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var with_child_1 = require("./with-child");
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
function getOr(strPath, defaultValue) {
    return with_child_1.withChild(strPath, function (value) { return value != null ? value : defaultValue; });
}
exports.getOr = getOr;
//# sourceMappingURL=get-or.js.map