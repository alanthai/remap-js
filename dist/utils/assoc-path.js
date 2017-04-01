"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sets a value of a root level or nested property, making shallow copies
 * each object it travels.
 *
 * @param {string[]} fullPath: path to follow.
 * @param {any} value: value to set.
 * @param {Object} fullObj: object to operate on.
 * @returns {Object} A new object with value set.
 */
function assocPath(fullPath, value, fullObj) {
    var newObj = __assign({}, fullObj);
    (function _assocPath(path, v) {
        var firstItem = path[0], restPath = path.slice(1);
        if (restPath.length === 0) {
            v[firstItem] = value;
        }
        else {
            v[firstItem] = typeof v[firstItem] === 'object' && v[firstItem] !== null
                ? __assign({}, v[firstItem]) : {};
            _assocPath(restPath, v[firstItem]);
        }
    })(fullPath, newObj);
    return newObj;
}
exports.assocPath = assocPath;
//# sourceMappingURL=assoc-path.js.map