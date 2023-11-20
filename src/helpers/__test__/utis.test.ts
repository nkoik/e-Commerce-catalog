import { generateGuid, formatCardNumber } from '@/helpers/utis'
import { expect, it, describe } from 'vitest'

describe('generateGuid', () => {
  it('should generate a GUID of the specified length', () => {
    const guid = generateGuid()
    expect(guid.length).toBe(10)
  })

  it('should generate a GUID with characters from the specified alphabet', () => {
    const guid = generateGuid()
    const alphabet =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (const char of guid) {
      expect(alphabet.includes(char)).toBeTruthy()
    }
  })
})

describe('formatCardNumber', () => {
  it('should remove non-digit characters from the card number', () => {
    const formattedCardNumber = formatCardNumber('1234 5678 9012 3456 7890')
    expect(formattedCardNumber).toBe('12345678901234567890')
  })

  it('should add spaces every four digits', () => {
    const formattedCardNumber = formatCardNumber('12345678901234567890')
    expect(formattedCardNumber).toBe('1234 5678 9012 3456 7890')
  })

  it('should trim the card number', () => {
    const formattedCardNumber = formatCardNumber('  12345678901234567890   ')
    expect(formattedCardNumber).toBe('1234 5678 9012 3456 7890')
  })
})
