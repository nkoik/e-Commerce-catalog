export function centsToEuros(cents: number): number {
  if (cents < 0 || isNaN(cents)) {
    return 0
  }
  return cents / 100
}
