<template>
  <div class="currency-container">
    <div class="currency-container__currency">
      <BaseSelect
        :options="currencyOptions"
        v-model="currency"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCurrencyStore } from '@/store/Common/currency'
import { computed } from 'vue'

const currencyStore = useCurrencyStore()
const currencyOptions = Object.keys(currencyStore.exchangeRates).map(
  (currency) => ({
    label: currency,
    value: currency
  })
)

const currency = computed({
  get: () => currencyStore.currency,
  set: (value) => currencyStore.changeCurrency(value)
})
</script>
