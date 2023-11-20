import {
  getOnlyNumbersOtherwiseZero,
  isFieldEmpty,
  validateField,
  checkoutFieldRules
} from '@/helpers/validations'
import { expect, test, describe } from 'vitest'

describe('getOnlyNumbersOtherwiseZero', () => {
  test('should return a number when input is numeric string', () => {
    expect(getOnlyNumbersOtherwiseZero('123')).toBe(123)
  })

  test('should return 0 when input is not a numeric string', () => {
    expect(getOnlyNumbersOtherwiseZero('abc')).toBe(0)
  })

  test('should return 0 when input is a negative number', () => {
    expect(getOnlyNumbersOtherwiseZero('-10')).toBe(0)
  })

  test('should return 0 when input is empty string', () => {
    expect(getOnlyNumbersOtherwiseZero('')).toBe(0)
  })
})

describe('isFieldEmpty', () => {
  test('should return true for empty string', () => {
    expect(isFieldEmpty('')).toBe(true)
  })

  test('should return false for non-empty string', () => {
    expect(isFieldEmpty('abc')).toBe(false)
  })

  test('should return false for a number', () => {
    expect(isFieldEmpty(123)).toBe(false)
  })
})

describe('validateField', () => {
  test('should return empty object for valid fields', () => {
    const fields = {
      cardNumber: '1234 5678 9012 3456',
      cardHolder: 'John Doe',
      cvv: '123',
      expirationDate: '01/23'
    }

    const errors = validateField(checkoutFieldRules, fields)
    expect(errors).toEqual({})
  })

  test('should return error messages for invalid fields', () => {
    const fields = {
      cardNumber: 'invalid',
      cardHolder: '123', // Invalid name
      cvv: 'abc', // Invalid CVV
      expirationDate: '13/23' // Invalid date
    }

    const errors = validateField(checkoutFieldRules, fields)
    expect(errors).toEqual({
      cardNumber: 'Only digits and spaces allowed',
      cardHolder: 'Please enter a valid name',
      cvv: 'Please enter a valid CVV',
      expirationDate: 'Please enter a valid date'
    })
  })
})
