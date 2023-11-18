export function getOnlyNumbersOtherwiseZero(value: string): number {
  const numericValue = parseFloat(value)

  if (!isNaN(numericValue) && numericValue >= 0) {
    return numericValue
  } else {
    return 0
  }
}

export function isFieldEmpty(value: number | string): boolean {
  return value == null || String(value).trim() === ''
}
