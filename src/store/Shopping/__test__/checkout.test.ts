import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { useCheckoutStore } from '@/store/Shopping/checkout'

describe('useCheckoutStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('initializes with the correct state', () => {
    const checkoutStore = useCheckoutStore()

    expect(checkoutStore.errors).toEqual({})
    expect(checkoutStore.isLoading).toBe(false)
    expect(checkoutStore.inputData).toEqual({})
  })

  it('sets errors correctly', () => {
    const checkoutStore = useCheckoutStore()

    checkoutStore.setInputData('1234', 'cardNumber')
    checkoutStore.setErrors('cardNumber')

    expect(checkoutStore.errors.cardNumber).toBeUndefined()

    checkoutStore.setInputData('invalid', 'cardNumber')
    checkoutStore.setErrors('cardNumber')

    expect(checkoutStore.errors.cardNumber).toBeTruthy()
  })

  it('sets input data correctly', () => {
    const checkoutStore = useCheckoutStore()

    checkoutStore.setInputData('John Doe', 'cardHolder')

    expect(checkoutStore.inputData.cardHolder).toBe('John Doe')
  })

  it('submits payment correctly without errors', async () => {
    const checkoutStore = useCheckoutStore()

    checkoutStore.setInputData('John Doe', 'cardHolder')
    checkoutStore.setInputData('1234', 'cardNumber')
    checkoutStore.setInputData('123', 'cvv')
    checkoutStore.setInputData('12/23', 'expirationDate')

    const result = await checkoutStore.submitPayment()

    expect(result).toBe(true)
    expect(checkoutStore.isLoading).toBe(false)
  })

  it('submits payment with errors', async () => {
    const checkoutStore = useCheckoutStore()

    checkoutStore.setInputData('John Doe', 'cardHolder')
    checkoutStore.setInputData('invalid', 'cardNumber')

    const result = await checkoutStore.submitPayment()

    expect(result).toBe(false)
    expect(checkoutStore.isLoading).toBe(false)
  })
})
