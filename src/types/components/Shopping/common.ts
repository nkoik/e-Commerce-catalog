import type { Product } from '@/types/api/catalog'

export type CartQuantity = number | string
export type CartItem = {
  catalogItemID: string
  quantity: CartQuantity
  cartItemID: string
}

export type CatalogItem = Product
