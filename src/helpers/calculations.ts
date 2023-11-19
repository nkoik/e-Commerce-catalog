import type { Voucher } from '@/types/components/Shopping/Containers/props'
import type {
  CartItemWithCatalogItem,
  CartTotals
} from '@/types/store/Shopping/types'

export function centsToEuros(cents: number): number {
  if (cents < 0 || isNaN(cents)) {
    return 0
  }
  return cents / 100
}

export function totalPrice(price: number, quantity: number): number {
  return price * quantity
}

export function findMinMaxFromObjectArray<T extends Record<string, any>>(
  array: T[],
  key: keyof T
): [number, number] {
  const values = array.map((item) => item[key])
  const min = Math.min(...values)
  const max = Math.max(...values)
  return [min, max]
}

export function withDiscount(
  cartItems: CartTotals,
  voucherData: Voucher | {}
): CartTotals {
  if (Object.keys(voucherData).length === 0) {
    return cartItems
  }
  if (voucherData.discountOn === 'total') {
    if (voucherData.type === 'price') {
      return {
        ...cartItems,
        totalPrice: cartItems.totalPrice - voucherData.value
      }
    }
    return {
      ...cartItems,
      totalPrice: cartItems.totalPrice * (1 - voucherData.value / 100)
    }
  }
  if (voucherData.type === 'price') {
    return Object.keys(cartItems).reduce(
      (acc, key) => {
        if (voucherData.discountOn.includes(key)) {
          acc[key] = cartItems[key] - voucherData.value
        } else if (key !== 'totalPrice') {
          acc[key] = cartItems[key]
        }
        if (key !== 'totalItems') {
          acc.totalPrice += acc[key]
        }
        return acc
      },
      { totalPrice: 0 } as CartTotals
    )
  }
  return Object.keys(cartItems).reduce(
    (acc, key) => {
      if (voucherData.discountOn.includes(key)) {
        acc[key] = cartItems[key] * (1 - voucherData.value / 100)
      } else if (key !== 'totalPrice') {
        acc[key] = cartItems[key]
      }
      if (key !== 'totalItems') {
        acc.totalPrice += acc[key]
      }
      return acc
    },
    { totalPrice: 0 } as CartTotals
  )
}
