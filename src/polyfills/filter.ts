type FilterCallback<T> = (item: T, index: number, array: T[]) => boolean;

export const filter = <T>(arr: T[], fn: FilterCallback<T>): T[] => {
  const result: T[] = [];

  for (let i = 0; i < arr.length; i++) {
    const newItem = fn(arr[i], i, arr);
    if (newItem) result.push(arr[i]);
  }

  return result;
};
