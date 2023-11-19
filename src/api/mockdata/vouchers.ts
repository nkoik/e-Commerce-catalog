import type { Vouchers } from '@/types/components/Shopping/Containers/props'

export const VOUCHERS: Vouchers = {
  HAPPYBIRTHDAY: {
    type: 'percentage',
    value: 20,
    discountOn: 'total'
  },
  SUMMER: {
    type: 'price',
    value: 200,
    discountOn: 'total'
  },
  ILIKEAPPLES: {
    type: 'percentage',
    value: 60,
    discountOn: ['d65d349b-2a77-4fdb-9d7a-0ab85eb84fd1']
  },
  ILIKEPEARS: {
    type: 'percentage',
    value: 40,
    discountOn: ['34d69140-d883-48d5-9af6-cecae5e653e2']
  },
  GREEN: {
    type: 'percentage',
    value: 30,
    discountOn: [
      '51405659-f333-4f68-871d-fe0fc4706678',
      '34d69140-d883-48d5-9af6-cecae5e653e2'
    ]
  }
}
