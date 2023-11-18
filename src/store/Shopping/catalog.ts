import { getCatalogService } from '@/api/Shopping/services'
import type { Product } from '@/api/types/catalog'
import { ShoppingStores } from '@/enums/stores'
import { defineStore } from 'pinia'
import { reactive, ref, type Ref } from 'vue'

export const useCatalogStore = defineStore(ShoppingStores.Catalog, () => {
  const catalog: Array<Product> = reactive([])
  const isLoading: Ref<boolean> = ref(false)

  async function getCatalog(): Promise<void> {
    isLoading.value = true
    try {
      const { products } = await getCatalogService()
      catalog.push(...products)
    } catch (error) {
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }

  return { catalog, isLoading, getCatalog }
})
