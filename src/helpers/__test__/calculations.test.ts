import {
  calculate,
  findMinMaxFromObjectArray,
  withDiscount
} from '@/helpers/calculations'
import type { Voucher } from '@/types/components/Shopping/Containers/props'
import type { CartTotals } from '@/types/store/Shopping/types'
import { expect, it, describe } from 'vitest'

describe('calculate', () => {
  it('should add two numbers', () => {
    expect(calculate(1, 2, 'add')).toBe(3)
  })

  it('should subtract two numbers', () => {
    expect(calculate(3, 2, 'minus')).toBe(1)
  })

  it('should multiply two numbers', () => {
    expect(calculate(4, 3, 'multiply')).toBe(12)
  })

  it('should divide two numbers', () => {
    expect(calculate(6, 2, 'divide')).toBe(3)
  })
})

describe('findMinMaxFromObjectArray', () => {
  const array = [{ value: 10 }, { value: 20 }, { value: 5 }]

  it('should find the minimum value from an object array', () => {
    const [min] = findMinMaxFromObjectArray(array, 'value')
    expect(min).toBe(5)
  })

  it('should find the maximum value from an object array', () => {
    const [, max] = findMinMaxFromObjectArray(array, 'value')
    expect(max).toBe(20)
  })
})

describe('withDiscount', () => {
  const cartItems: CartTotals = {
    id1: 100,
    id2: 10,
    totalPrice: 110,
    totalItems: 2
  }

  it('should apply discount to total price when voucherData is valid', () => {
    const voucherData: Voucher = {
      discountOn: 'total',
      type: 'price',
      value: 10
    }

    const discountedCartItems = withDiscount(cartItems, voucherData)
    expect(discountedCartItems.totalPrice).toBe(100)
  })

  it('should apply discount to specific items when voucherData is valid', () => {
    const voucherData: Voucher = {
      discountOn: ['id1', 'id2'],
      type: 'percentage',
      value: 5
    }

    const discountedCartItems = withDiscount(cartItems, voucherData)
    expect(discountedCartItems.id1).toBe(95)
    expect(discountedCartItems.id2).toBe(9.5)
    expect(discountedCartItems.totalPrice).toBe(104.5)
  })

  it('should not apply discount when voucherData is invalid', () => {
    const discountedCartItems = withDiscount(cartItems, {})
    expect(discountedCartItems).toEqual(cartItems)
  })
})
