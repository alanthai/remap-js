"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var with_child_1 = require("./with-child");
var remap_1 = require("./remap");
/**
 * Remaps a nested array per element
 *
 * @param {string} strPath: dot-separated path.
 * @param {any} mapping
 * @param {any} obj: target object.
 * @returns {any} An object with shape specified.
 * @example
 *
 *   const object = { A: [{ B: 1 }, { B: 2 }] };
 *   remap({ a: remapArray('A', { b: 'B' }) }, object);
 *     // => { a: [{ b: 1 }, { b: 2 }], c: 3 }
 */
function remapArray(strPath, mapping) {
    return with_child_1.withChild(strPath, function (items) {
        if (!Array.isArray(items)) {
            throw Error('remapArray: path does not lead to array');
        }
        return items.map(function (item, index) { return remap_1.remap(mapping, item, index); });
    });
}
exports.remapArray = remapArray;
//# sourceMappingURL=remap-array.js.map