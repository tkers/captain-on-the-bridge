export const intersperse = (arr, sep) =>
  arr.reduce((a, v) => [...a, v, sep], []).slice(0, -1);
