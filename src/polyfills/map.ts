type MapCallback<T, U> = (item: T, index: number, array: T[]) => U;

export const map = <T, U>(arr: T[], fn: MapCallback<T, U>): U[] => {
  const result: U[] = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i, arr));
  }

  return result;
};
