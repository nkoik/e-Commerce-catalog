import type {
  Voucher,
  Vouchers
} from '@/types/components/Shopping/Containers/props'
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
  vouchers: Vouchers
  voucher: string
  data: Voucher | {}
}

export type CartItemWithCatalogItem = CartItem & Partial<CatalogItem>

export type CheckoutState = {
  errors: Record<string, string>
  isLoading: boolean
  inputData: Record<string, string>
}
