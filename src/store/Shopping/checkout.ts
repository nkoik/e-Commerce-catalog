import { ShoppingStores } from '@/enums/stores'
import { creditCardFields, validateField } from '@/helpers/validations'
import type { CheckoutState } from '@/types/store/Shopping/types'
import { defineStore } from 'pinia'
import { computed, reactive, toRefs } from 'vue'

export const useCheckoutStore = defineStore(ShoppingStores.Checkout, () => {
  const state: CheckoutState = reactive({
    errors: {},
    isLoading: false,
    inputData: {}
  })

  const hasErrors = computed((): boolean => {
    return Object.values(state.errors).filter((val) => val != null).length > 0
  })

  function setErrors(type: string) {
    const errorMessage = validateField(creditCardFields, {
      [type]: state.inputData[type]
    })
    if (Object.keys(errorMessage).length) {
      state.errors[type] = errorMessage[type]
    } else {
      delete state.errors[type]
    }
  }

  function setInputData(value: string, type: string) {
    state.inputData[type] = value
  }

  async function submitPayment(): Promise<boolean | void> {
    Object.keys(state.inputData).forEach((key) => {
      setErrors(key)
    })
    if (!hasErrors.value) {
      state.isLoading = true
      return await new Promise((resolve) =>
        setTimeout(() => {
          resolve(true)
        }, 2000)
      )
    }
    return false
  }

  return {
    ...toRefs(state),
    setErrors,
    setInputData,
    submitPayment,
    hasErrors
  }
})
