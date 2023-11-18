export function getOnlyNumbersOtherwiseZero(value: number | string): number {
  const onlyNumbers = String(value).replace(/[^\d]/g, '')
  return onlyNumbers ? parseInt(onlyNumbers) : 0
}

export function isFieldEmpty(value: number | string): boolean {
  return value == null || String(value).trim() === ''
}
