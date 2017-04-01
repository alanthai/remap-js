"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var with_child_1 = require("./with-child");
var remap_1 = require("./remap");
/**
 * Remap from a nested path
 *
 * @param {string} strPath: dot-separated path.
 * @param {any} mapping
 * @param {any} obj: target object.
 * @returns {any} An object with shape specified.
 * @example
 *
 *   const object = { A: { B: { C: 1, D: 2 } } };
 *   remap({ a: remapFrom('A.B', { c: 'C', d: 'D' }) }, object);
 *     // => { a: { c: 1, d: 2 } }
 */
function remapFrom(strPath, mapping) {
    return with_child_1.withChild(strPath, function (nestedObj) { return remap_1.remap(mapping, nestedObj); });
}
exports.remapFrom = remapFrom;
//# sourceMappingURL=remap-from.js.map