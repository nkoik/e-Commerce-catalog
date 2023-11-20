export type Currency = 'EUR' | 'USD' | 'GBP'

export type CurrencyState = {
  locale: string
  currency: Currency
  exchangeRates: Record<Currency, number>
  [key: string]: string | Record<Currency, number>
}
