export function centsToEuros(cents: number): number {
  if (cents < 0 || isNaN(cents)) {
    return 0
  }
  return cents / 100
}

export function findMinMaxFromObjectArray<T extends Record<string, any>>(
  array: T[],
  key: keyof T
): [number, number] {
  const values = array.map((item) => item[key])
  const min = Math.min(...values)
  const max = Math.max(...values)
  return [min, max]
}
