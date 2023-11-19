export type CatalogAddItemContainerProps = {
  id: string
}

type VoucherType = 'percentage' | 'price'

export type Voucher = {
  type: VoucherType
  value: number
  discountOn: string | string[]
}

export type Vouchers = {
  readonly HAPPYBIRTHDAY: Voucher
  readonly SUMMER: Voucher
  readonly ILIKEAPPLES: Voucher
  readonly ILIKEPEARS: Voucher
  readonly GREEN: Voucher
}
