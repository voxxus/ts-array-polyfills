import { map, filter, reduce } from './polyfills';

const arr: number[] = [1, 2, 3, 4];
const arrStr: string[] = ['abc', 'def', 'ghi', 'jkl'];

const mapper = (item: number): number => item * 2;
const filterCb = (item: number): boolean => item > 2;
const reducer = (accum: number, item: number): number => accum + item;
const reducerObj = (accum: Record<string, string>, item: string): Record<string, string> => ({ ...accum,  [item]: item });

console.log('Map example:', map(arr, mapper));

console.log('Filter example', filter(arr, filterCb));

// check numbers array with initialValue = number
console.log('Reduce example', reduce(arr, reducer, 2));

// check numbers array with initialValue = undefined
console.log('Reduce example', reduce(arr, reducer));

// error: empty array with initialValue = undefined
// console.log('Reduce example', reduce([], reducer));

// check string array with initialValue = {}
console.log('Reduce example', reduce(arrStr, reducerObj, {}));
