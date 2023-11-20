import { ShoppingStores } from '@/enums/stores'
import { defineStore } from 'pinia'
import { computed, reactive, toRefs } from 'vue'
import type { VoucherState } from '@/types/store/Shopping/types'
import type { Voucher } from '@/types/components/Shopping/Containers/props'
import { VOUCHERS } from '@/api/mockdata/vouchers'

export const useVoucherStore = defineStore(ShoppingStores.Voucher, () => {
  const state: VoucherState = reactive({
    vouchers: VOUCHERS,
    voucher: '',
    data: {}
  })

  const isSelected = computed((): boolean => {
    return Object.keys(state.data).length > 0
  })

  const hasError = computed((): boolean => {
    return state.voucher !== '' && !isSelected.value
  })

  function setVoucher(voucher: string) {
    state.voucher = voucher
    if (voucher in state.vouchers) {
      setDiscount(state.vouchers[voucher])
    }
  }

  function setDiscount(data: Voucher) {
    state.data = data
  }

  function removeDiscount() {
    state.voucher = ''
    state.data = {}
  }

  return {
    ...toRefs(state),
    setDiscount,
    removeDiscount,
    setVoucher,
    isSelected,
    hasError
  }
})
