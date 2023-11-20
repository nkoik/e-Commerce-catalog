import CurrencyFormatter from '@/helpers/currency'
import { describe, beforeEach, test, expect } from 'vitest'

describe('CurrencyFormatter', () => {
  beforeEach(() => {
    // Reset the singleton instance before each test
    CurrencyFormatter['instance'] = null
  })

  test('getInstance should return a single instance', () => {
    const instance1 = CurrencyFormatter.getInstance()
    const instance2 = CurrencyFormatter.getInstance()
    expect(instance1).toBe(instance2)
  })

  test('setLocale should update the locale', () => {
    const formatter = CurrencyFormatter.getInstance()
    formatter.setLocale('fr-FR')
    expect(formatter['locale']).toBe('fr-FR')
  })

  test('setCurrency should update the currency', () => {
    const formatter = CurrencyFormatter.getInstance()
    formatter.setCurrency('EUR')
    expect(formatter['currency']).toBe('EUR')
  })

  test('format should return formatted currency string', () => {
    const formatter = CurrencyFormatter.getInstance()
    const formatted = formatter.format(1234.56)
    expect(formatted).toBeTruthy()
  })

  test('formatFromCents should return formatted currency string from cents', () => {
    const formatter = CurrencyFormatter.getInstance()
    const formatted = formatter.formatFromCents(123456)
    expect(formatted).toBeTruthy()
  })

  test('formatFromCents should return "0.00" for negative cents', () => {
    const formatter = CurrencyFormatter.getInstance()
    const formatted = formatter.formatFromCents(-100)
    expect(formatted).toBe('0.00')
  })

  test('formatFromCents should return "0.00" for NaN cents', () => {
    const formatter = CurrencyFormatter.getInstance()
    const formatted = formatter.formatFromCents(NaN)
    expect(formatted).toBe('0.00')
  })
})
