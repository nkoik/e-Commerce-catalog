import { CommonStores } from '@/enums/stores'
import { defineStore } from 'pinia'
import { computed, reactive, toRefs } from 'vue'
import type { CurrencyState } from '@/types/store/Common/types'
import CurrencyFormatter from '@/helpers/currency'
import { calculate } from '@/helpers/calculations'

export const useCurrencyStore = defineStore(CommonStores.Currency, () => {
  const formatter = CurrencyFormatter.getInstance()
  const state: CurrencyState = reactive({
    locale: 'en-US',
    currency: 'EUR',
    exchangeRates: {
      EUR: 1,
      USD: 1.19,
      GBP: 0.86
    }
  })

  const format = computed(() => (price: number, isCents: boolean) => {
    setChangesToFormatter(state)
    const exchangedPrice = calculate(
      price,
      state.exchangeRates[state.currency],
      'multiply'
    )
    return isCents
      ? formatter.formatFromCents(exchangedPrice)
      : formatter.format(exchangedPrice)
  })

  function changeLocale(locale: string): void {
    state.locale = locale
  }

  function changeCurrency(currency: string): void {
    state.currency = currency
  }

  function setChangesToFormatter(state: CurrencyState): void {
    formatter.setLocale(state.locale)
    formatter.setCurrency(state.currency)
  }

  return {
    ...toRefs(state),
    format,
    changeLocale,
    changeCurrency
  }
})
