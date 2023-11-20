<template>
  <CartList
    title="Order List"
    :items="cartStore.cartItems"
  >
    <template #list="{ catalogItemID, price, name, quantity }">
      <CartListItem
        :price="`${currencyStore.format(
          calculate(price, quantity, 'multiply'),
          true
        )}/kg`"
        :title="name"
        :quantity="quantity"
      >
        <template #action>
          <BaseButton
            type="danger"
            @click="handleRemoveCartItem(catalogItemID)"
          >
            Remove
          </BaseButton>
        </template>
      </CartListItem>
    </template>
  </CartList>
</template>

<script setup lang="ts">
import CartList from '@/components/Shopping/Presentational/CartList.vue'
import CartListItem from '@/components/Shopping/Presentational/CartListItem.vue'
import { calculate } from '@/helpers/calculations'
import { useCurrencyStore } from '@/store/Common/currency'
import { useCartStore } from '@/store/Shopping/cart'

const cartStore = useCartStore()
const currencyStore = useCurrencyStore()

function handleRemoveCartItem(id: string) {
  cartStore.removeCartItem(id)
}
</script>
