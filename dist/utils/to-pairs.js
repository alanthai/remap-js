"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns array of key-value pairs
 *
 * @param {any} obj
 * @returns {[string, any][]}
 */
function toPairs(obj) {
    var pairs = [];
    for (var k in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, k)) {
            pairs.push([k, obj[k]]);
        }
    }
    return pairs;
}
exports.toPairs = toPairs;
//# sourceMappingURL=to-pairs.js.map