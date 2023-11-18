<template>
  <CartList
    title="Summary"
    :items="listItems"
  >
    <template #list="{ title, value }">
      <CartListItem
        :price="value"
        :title="title"
      />
    </template>
  </CartList>
</template>
<script setup lang="ts">
import CartList from '@/components/Shopping/Presentational/CartList.vue'
import CartListItem from '@/components/Shopping/Presentational/CartListItem.vue'
import { centsToEuros } from '@/helpers/calculations'
import { useCartStore } from '@/store/Shopping/cart'
import { computed } from 'vue'

const cartStore = useCartStore()
const listItems = computed(() => {
  return [
    {
      title: 'Total Items',
      value: cartStore.cartTotalPriceAndItems.totalItems
    },
    {
      title: 'Total Price',
      value: `${centsToEuros(cartStore.cartTotalPriceAndItems.totalPrice)} Euro`
    }
  ]
})
</script>
