type ReducerCallback<T, R> = (accum: R, item: T, index: number, array: T[]) => R;

export const reduce = <T, R>(arr: T[], fn: ReducerCallback<T, R>, initialValue?: R): R => {
  if (initialValue === undefined && arr.length === 0)
    throw new Error("Reduce of empty array with no initial value");

  let accum = (initialValue !== undefined ? initialValue : arr[0]) as R;

  for (let i = 0; i < arr.length; i++) {
    if (initialValue === undefined && i === 0) continue;
    accum = fn(accum, arr[i], i, arr);
  }

  return accum;
};
