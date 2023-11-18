import { ShoppingStores } from '@/enums/stores'
import { defineStore } from 'pinia'
import { computed, reactive, toRefs } from 'vue'
import type { CartState, CartTotals } from '@/types/store/Shopping/types'
import type { CartItem } from '@/types/components/Shopping/common'
import { useCatalogStore } from '@/store/Shopping/catalog'

export const useCartStore = defineStore(ShoppingStores.Cart, () => {
  const catalogStore = useCatalogStore()
  const state: CartState = reactive({
    cart: []
  })

  const cartItems = computed(() => {
    return state.cart.map((item) => {
      const catalogItemFound = catalogStore.catalog.find(
        ({ id }) => id === item.cartItemID
      )
      const { name, price } = catalogItemFound || { name: '', price: 0 }
      return {
        name,
        price,
        ...item
      }
    })
  })

  const cartTotalPriceAndItems = computed((): CartTotals => {
    return cartItems.value.reduce(
      (acc, item) => {
        acc.totalPrice += item.price * Number(item.quantity)
        acc.totalItems += Number(item.quantity)
        return acc
      },
      { totalPrice: 0, totalItems: 0 }
    )
  })

  function setCartItems(item: CartItem) {
    state.cart.push(item)
  }

  function deleteCartItems(guid: string) {
    state.cart = state.cart.filter((item) => item.cartItemID !== guid)
  }

  return {
    ...toRefs(state),
    cartItems,
    cartTotalPriceAndItems,
    setCartItems,
    deleteCartItems
  }
})
