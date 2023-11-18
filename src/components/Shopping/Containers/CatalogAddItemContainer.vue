<template>
  <div class="catalog-add-item-container">
    <BaseLabel for="kgs">How many kg do you want?</BaseLabel>
    <BaseInput
      id="kgs"
      type="number"
      v-model="search"
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
const search: Ref<CartQuantity> = ref(0)
const cartStore = useCartStore()

const isDisabled = computed((): boolean => {
  return isFieldEmpty(search.value) || parseFloat(search.value as string) <= 0
})

function handleAddItem(): void {
  const quantity = getOnlyNumbersOtherwiseZero(search.value as string)
  if (quantity === 0) return
  const payload: CartItem = {
    catalogItemID: generateGuid(16),
    quantity,
    cartItemID: props.id
  }
  cartStore.setCartItems(payload)
  search.value = 0
}
</script>
