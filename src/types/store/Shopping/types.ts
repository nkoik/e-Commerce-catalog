import type { CatalogItem, CartItem } from '@/types/components/Shopping/common'

export type CatalogState = {
  catalog: Array<CatalogItem>
  isLoading: boolean
}

export type CartState = {
  cart: Array<CartItem>
}

export type CartTotals = {
  totalPrice: number
  totalItems: number
}
