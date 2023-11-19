<template>
  <div class="catalog-add-item-container">
    <BaseLabel :for="id">Quantity (kg)</BaseLabel>
    <BaseInput
      :id="id"
      type="number"
      v-model="quantityText"
    />
    <BaseButton
      type="secondary"
      size="sm"
      :disabled="isDisabled"
      @click="handleAddItem"
      >Add</BaseButton
    >
  </div>
</template>
<script setup lang="ts">
import { computed, ref, type Ref } from 'vue'
import type { CatalogAddItemContainerProps } from '@/types/components/Shopping/Containers/props'
import type { CartItem, CartQuantity } from '@/types/components/Shopping/common'
import { generateGuid } from '@/helpers/utis'
import { useCartStore } from '@/store/Shopping/cart'
import {
  getOnlyNumbersOtherwiseZero,
  isFieldEmpty
} from '@/helpers/validations'

const props = defineProps<CatalogAddItemContainerProps>()
const quantityText: Ref<CartQuantity> = ref(0)
const cartStore = useCartStore()

const isDisabled = computed((): boolean => {
  return (
    isFieldEmpty(quantityText.value) ||
    parseFloat(quantityText.value as string) <= 0
  )
})

function handleAddItem(): void {
  const quantity = getOnlyNumbersOtherwiseZero(quantityText.value as string)
  if (quantity === 0) return
  const payload: CartItem = {
    catalogItemID: generateGuid(16),
    quantity,
    cartItemID: props.id
  }
  cartStore.setCartItem(payload)
  quantityText.value = 0
}
</script>
