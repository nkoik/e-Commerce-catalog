export type Product = {
  id: string
  name: string
  price: number
}

export type Catalog = {
  products: Product[]
}
