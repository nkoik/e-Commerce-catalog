import { ShoppingStores } from '@/enums/stores'
import { defineStore } from 'pinia'
import { computed, reactive, toRefs } from 'vue'
import type {
  CartItemWithCatalogItem,
  CartState,
  CartTotals
} from '@/types/store/Shopping/types'
import type { CartItem } from '@/types/components/Shopping/common'
import { useCatalogStore } from '@/store/Shopping/catalog'
import { useVoucherStore } from '@/store/Shopping/voucher'
import { withDiscount } from '@/helpers/calculations'
import { totalPrice } from '@/helpers/calculations'

export const useCartStore = defineStore(ShoppingStores.Cart, () => {
  const catalogStore = useCatalogStore()
  const voucherStore = useVoucherStore()
  const state: CartState = reactive({
    cart: []
  })

  const cartItems = computed((): CartItemWithCatalogItem => {
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
    return withDiscount(
      cartItems.value.reduce(
        (acc, item) => {
          acc.totalPrice += totalPrice(item.price, Number(item.quantity))
          acc.totalItems += Number(item.quantity)
          if (!acc[item.cartItemID]) {
            acc[item.cartItemID] = 0
          }
          acc[item.cartItemID] += totalPrice(item.price, Number(item.quantity))
          return acc
        },
        { totalPrice: 0, totalItems: 0 }
      ),
      voucherStore.data
    )
  })

  function setCartItem(item: CartItem) {
    state.cart.push(item)
  }

  function removeCartItem(guid: string) {
    state.cart = state.cart.filter((item) => item.catalogItemID !== guid)
  }

  return {
    ...toRefs(state),
    cartItems,
    cartTotalPriceAndItems,
    setCartItem,
    removeCartItem
  }
})
