import { HttpService } from '@/api'
import type { Catalog } from '@/types/api/catalog'
import { ShoppingEndpoints } from '@/enums/endpoints'

export async function getCatalogService() {
  const http = new HttpService()
  return await http.service().get<Catalog>(ShoppingEndpoints.Catalog)
}
