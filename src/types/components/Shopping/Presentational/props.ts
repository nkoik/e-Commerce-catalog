import type { CartQuantity } from '@/types/components/Shopping/common'

export type CatalogListItemProps = {
  title: string
  price: number | string
}

export type CartListItemProps = Partial<CatalogListItemProps> & {
  quantity: CartQuantity
}

export type CartListProps = {
  title: string
  items: Array<{
    [key: string]: any
  }>
}

export type NavigationButtonsProps = {
  hasPrevious: boolean
  hasNext: boolean
}
