import { calculate } from '@/helpers/calculations'

function convertCents(cents: number): number {
  if (cents < 0 || isNaN(cents)) {
    return 0
  }
  return calculate(cents, 100, 'divide')
}

export default class CurrencyFormatter {
  private static instance: CurrencyFormatter | null = null
  private locale: string = 'en-US'
  private currency: string = 'USD'

  private constructor() {}

  static getInstance(): CurrencyFormatter {
    if (!CurrencyFormatter.instance) {
      CurrencyFormatter.instance = new CurrencyFormatter()
    }
    return CurrencyFormatter.instance
  }

  setLocale(locale: string): void {
    this.locale = locale
  }

  setCurrency(currency: string): void {
    this.currency = currency
  }

  format(amount: number): string {
    const numberFormat = new Intl.NumberFormat(this.locale, {
      style: 'currency',
      currency: this.currency,
      minimumFractionDigits: 2
    })

    return numberFormat.format(amount)
  }

  formatFromCents(cents: number): string {
    return this.format(convertCents(cents))
  }
}
