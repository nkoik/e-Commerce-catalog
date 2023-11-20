import type { Voucher } from '@/types/components/Shopping/Containers/props'
import type { CartTotals } from '@/types/store/Shopping/types'

export function calculate(
  number1: number,
  number2: number,
  operator: 'multiply' | 'add' | 'minus' | 'divide'
): number {
  switch (operator) {
    case 'add':
      return number1 + number2
    case 'minus':
      return number1 - number2
    case 'multiply':
      return number1 * number2
    case 'divide':
      return number1 / number2
    default:
      return 0
  }
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

function calculateDiscount(
  value: number,
  discountType: string,
  percentage: number
): number {
  return discountType === 'price'
    ? value - percentage
    : value * (1 - percentage / 100)
}

export function withDiscount(
  cartItems: CartTotals,
  voucherData: Voucher | {}
): CartTotals {
  if (Object.keys(voucherData).length === 0) {
    return cartItems
  }

  // @ts-ignore
  if (voucherData.discountOn === 'total') {
    return {
      ...cartItems,
      totalPrice: calculateDiscount(
        cartItems.totalPrice,
        /* @ts-ignore */
        voucherData.type,
        /* @ts-ignore */
        voucherData.value
      )
    }
  }

  return Object.keys(cartItems).reduce(
    (acc, key) => {
      /* @ts-ignore */
      if (voucherData.discountOn.includes(key)) {
        acc[key] = calculateDiscount(
          cartItems[key],
          /* @ts-ignore */
          voucherData.type,
          /* @ts-ignore */
          voucherData.value
        )
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
