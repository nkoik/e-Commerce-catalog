import type { Voucher } from '@/types/components/Shopping/Containers/props'
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
  [key: string]: number
}

export type VoucherState = {
  voucher: string
  data: Voucher | {}
}

export type CartItemWithCatalogItem = CartItem & Partial<CatalogItem>
