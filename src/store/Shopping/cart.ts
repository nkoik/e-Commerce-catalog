import { ShoppingStores } from '@/enums/stores'
import { defineStore } from 'pinia'
import { reactive, toRefs } from 'vue'
import type { CartState } from '@/types/store/Shopping/types'
import type { CartItem } from '@/types/components/Shopping/common'

export const useCartStore = defineStore(ShoppingStores.Cart, () => {
  const state: CartState = reactive({
    cart: []
  })

  function setCartItems(item: CartItem) {
    state.cart.push(item)
  }

  function deleteCartItems(guid: string) {
    state.cart = state.cart.filter((item) => item.cartItemID !== guid)
  }

  return { ...toRefs(state), setCartItems, deleteCartItems }
})
