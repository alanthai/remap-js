import {
  assocPath,
  init,
  last,
  toPairs,
  path,
  Path
} from './utils';

// { a: { b: 'hello', c: 'world' } }
// => [['a', 'b', 'hello'], ['a', 'c', 'world']]
function getPathsAndValues(rootObj: any): any[] {
  const paths: string[][] = [];

  (function getPathAndValue(obj: any, path: string[] = []): void {
    toPairs(obj)
      .forEach(([key, value]: [string, any]) => {
        if (typeof value === 'object' && value !== null) {
          getPathAndValue(value, path.concat(key));
        } else {
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
export function remap<R>(mapping: any, source: any, context?: any): R {
  const pathsAndValues = getPathsAndValues(mapping);
  const objGet = (p: Path) => path(p, source);

  return pathsAndValues
    .reduce(
      (newObj, destAndOrigin) => {
        const destinationPath = init<string>(destAndOrigin);
        const originPath = last(destAndOrigin);

        let value;
        if (originPath instanceof Function) {
          value = (originPath as Function)(source, context);
        } else if (originPath !== '') {
          value = objGet((originPath as string).split('.'));
        } else {
          value = objGet(destinationPath);
        }

        return assocPath(destinationPath, value, newObj);
      },
      {},
    );
}
