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
    <template #content>
      <strong
        v-if="voucherStore.isSelected"
        class="text-green-500"
        >Voucher Applied !</strong
      >
    </template>
  </CartList>
</template>
<script setup lang="ts">
import CartList from '@/components/Shopping/Presentational/CartList.vue'
import CartListItem from '@/components/Shopping/Presentational/CartListItem.vue'
import { useCartStore } from '@/store/Shopping/cart'
import { useVoucherStore } from '@/store/Shopping/voucher'
import { useCurrencyStore } from '@/store/Common/currency'
import { computed } from 'vue'

const cartStore = useCartStore()
const voucherStore = useVoucherStore()
const currencyStore = useCurrencyStore()

const listItems = computed(() => {
  return [
    {
      title: 'Total Items',
      value: cartStore.cartTotalPriceAndItems.totalItems
    },
    {
      title: 'Total Price',
      value: currencyStore.format(
        cartStore.cartTotalPriceAndItems.totalPrice,
        true
      )
    }
  ]
})
</script>
