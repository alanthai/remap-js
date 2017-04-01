"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
// { a: { b: 'hello', c: 'world' } }
// => [['a', 'b', 'hello'], ['a', 'c', 'world']]
function getPathsAndValues(rootObj) {
    var paths = [];
    (function getPathAndValue(obj, path) {
        if (path === void 0) { path = []; }
        utils_1.toPairs(obj)
            .forEach(function (_a) {
            var key = _a[0], value = _a[1];
            if (typeof value === 'object' && value !== null) {
                getPathAndValue(value, path.concat(key));
            }
            else {
                paths.push(path.concat([key, value]));
            }
        });
    })(rootObj);
    return paths;
}
/**
 * Changes the shape of an object, as specified by a mapping object.
 *
 * @param {any} mapping: the shape of this object will be the shape
 *   of the returned object. Its values are a dot-separated path
 *   from the source object, or a function to compute the its value
 * @param {any} source: object to remap from
 * @param {any} context (optional): if a function is passed, the second argument
 *   will be passed this value
 * @returns {any}
 * @example
 *
 *   const object = { A: 1, B: 2, C: { D: 3 }, E: 4, f: 5 };
 *   remap({
 *     a: 'A',
 *     b: { c: 'B' },
 *     d: 'C.D',
 *     e: (obj) => obj.E,
 *     f: ''
 *   }, object);
 *   => { a: 1, b: { c: 2 }, d: 3, e: 4, f: 5 }
 */
function remap(mapping, source, context) {
    var pathsAndValues = getPathsAndValues(mapping);
    var objGet = function (p) { return utils_1.path(p, source); };
    return pathsAndValues
        .reduce(function (newObj, destAndOrigin) {
        var destinationPath = utils_1.init(destAndOrigin);
        var originPath = utils_1.last(destAndOrigin);
        var value;
        if (originPath instanceof Function) {
            value = originPath(source, context);
        }
        else if (originPath !== '') {
            value = objGet(originPath.split('.'));
        }
        else {
            value = objGet(destinationPath);
        }
        return utils_1.assocPath(destinationPath, value, newObj);
    }, {});
}
exports.remap = remap;
//# sourceMappingURL=remap.js.map