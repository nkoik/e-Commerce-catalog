import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { VOUCHERS } from '@/api/mockdata/vouchers'
import { useVoucherStore } from '@/store/Shopping/voucher'

describe('useVoucherStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('initializes with the correct state', () => {
    const voucherStore = useVoucherStore()

    expect(voucherStore.vouchers).toEqual(VOUCHERS)
    expect(voucherStore.voucher).toBe('')
    expect(voucherStore.data).toEqual({})
  })

  it('sets voucher correctly and updates discount', () => {
    const voucherStore = useVoucherStore()

    voucherStore.setVoucher('HAPPYBIRTHDAY')

    expect(voucherStore.voucher).toBe('HAPPYBIRTHDAY')
    expect(voucherStore.data).toEqual(VOUCHERS['HAPPYBIRTHDAY'])
  })

  it('sets and removes discount correctly', () => {
    const voucherStore = useVoucherStore()

    voucherStore.setDiscount(VOUCHERS['SUMMER'])

    expect(voucherStore.data).toEqual(VOUCHERS['SUMMER'])

    voucherStore.removeDiscount()
    expect(voucherStore.voucher).toBe('')
    expect(voucherStore.data).toEqual({})
  })

  it('computed isSelected returns the correct value', () => {
    const voucherStore = useVoucherStore()

    expect(voucherStore.isSelected).toBe(false)

    voucherStore.setDiscount(VOUCHERS['ILIKEAPPLES'])
    expect(voucherStore.isSelected).toBe(true)
  })

  it('computed hasError returns the correct value', () => {
    const voucherStore = useVoucherStore()

    expect(voucherStore.hasError).toBe(false)

    voucherStore.setVoucher('HAPPYBIRTHDAY')
    expect(voucherStore.hasError).toBe(false)

    voucherStore.setVoucher('INVALIDVOUCHER')
    expect(voucherStore.hasError).toBe(true)
  })
})
