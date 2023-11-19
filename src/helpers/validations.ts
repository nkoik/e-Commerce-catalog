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

export function validateField(
  fields: Record<string, { rule: RegExp | Function; message: string }>,
  value: Record<string, string>
): Record<string, string> {
  const errors: Record<string, string> = {}
  for (const field in fields) {
    if (!(fields[field].rule as RegExp).test(value[field])) {
      errors[field] = fields[field].message
    }
  }

  return errors
}

export const creditCardFields: Record<
  string,
  { rule: RegExp | Function; message: string }
> = {
  cardNumber: {
    rule: /^(\d{4}\s?){3}(\d{4}\s?)?$/,
    message: 'Only digits and spaces allowed'
  },
  cardHolder: {
    rule: /^[a-zA-Z ]{3,30}$/,
    message: 'Please enter a valid name'
  },
  cvv: {
    rule: /^[0-9]{3,4}$/,
    message: 'Please enter a valid CVV'
  },
  expirationDate: {
    rule: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
    message: 'Please enter a valid date'
  }
}
