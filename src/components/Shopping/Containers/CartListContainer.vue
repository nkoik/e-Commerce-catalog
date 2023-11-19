<template>
  <CartList
    title="Order List"
    :items="cartStore.cartItems"
  >
    <template #list="{ catalogItemID, price, name, quantity }">
      <CartListItem
        :price="`${centsToEuros(totalPrice(price, quantity))} Euro/kg`"
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
import { centsToEuros, totalPrice } from '@/helpers/calculations'
import { useCartStore } from '@/store/Shopping/cart'

const cartStore = useCartStore()

function handleRemoveCartItem(id: string) {
  cartStore.removeCartItem(id)
}
</script>
