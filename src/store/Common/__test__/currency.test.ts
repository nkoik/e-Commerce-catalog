import { setActivePinia, createPinia } from 'pinia'
import { describe, beforeEach, it, expect } from 'vitest'
import { useCurrencyStore } from '@/store/Common/currency'

describe('useCurrencyStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('initializes with the correct state', () => {
    const currencyStore = useCurrencyStore()

    expect(currencyStore.locale).toBe('en-US')
    expect(currencyStore.currency).toBe('EUR')
    expect(currencyStore.exchangeRates).toEqual({
      EUR: 1,
      USD: 1.19,
      GBP: 0.86
    })
  })

  it('formats currency correctly', () => {
    const currencyStore = useCurrencyStore()

    const formattedPrice = currencyStore.format(1000, false)

    expect(formattedPrice).toBe('1,000.00 €')
  })

  it('changes locale correctly', () => {
    const currencyStore = useCurrencyStore()

    currencyStore.changeLocale('fr-FR')

    expect(currencyStore.locale).toBe('fr-FR')
  })

  it('changes currency correctly', () => {
    const currencyStore = useCurrencyStore()

    currencyStore.changeCurrency('USD')

    expect(currencyStore.currency).toBe('USD')
  })
})
