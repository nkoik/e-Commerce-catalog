import { getCatalogService } from '@/api/Shopping/services'
import type { CatalogState } from '@/types/store/Shopping/types'
import { ShoppingStores } from '@/enums/stores'
import { defineStore } from 'pinia'
import { reactive, toRefs } from 'vue'

export const useCatalogStore = defineStore(ShoppingStores.Catalog, () => {
  const state: CatalogState = reactive({
    catalog: [],
    isLoading: false
  })

  async function getCatalog(): Promise<void> {
    state.isLoading = true
    try {
      const { products } = await getCatalogService()
      state.catalog.push(...products)
    } catch (error) {
      console.error(error)
    } finally {
      state.isLoading = false
    }
  }

  return { ...toRefs(state), getCatalog }
})
