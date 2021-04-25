function add(a: number, b: number): number {
  return a + b;
}

export function start(x: number): string {
  return `Sum of ${x} and 5 = ${add(x, 5)}`;
}
