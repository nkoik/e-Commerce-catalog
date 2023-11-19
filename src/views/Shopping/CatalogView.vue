<template>
  <section class="sm:grid-cols-2">
    <CatalogListContainer class="md:overflow-auto">
      <template #list="{ id, price, name }">
        <CatalogListItem
          :price="`${centsToEuros(price)} Euro/kg`"
          :title="name"
        >
          <template #input>
            <CatalogAddItemContainer
              class="flex flex-col gap-2"
              :id="id"
            />
          </template>
        </CatalogListItem>
      </template>
      <template #loading>
        <CatalogListContainerSkeleton />
      </template>
    </CatalogListContainer>
    <OverviewContainer />
  </section>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const CatalogListContainer = defineAsyncComponent(
  () => import('@/components/Shopping/Containers/CatalogListContainer.vue')
)
const CatalogAddItemContainer = defineAsyncComponent(
  () => import('@/components/Shopping/Containers/CatalogAddItemContainer.vue')
)
const CatalogListItem = defineAsyncComponent(
  () => import('@/components/Shopping/Presentational/CatalogListItem.vue')
)
const OverviewContainer = defineAsyncComponent(
  () => import('@/components/Shopping/Containers/OverviewContainer.vue')
)
const CatalogListContainerSkeleton = defineAsyncComponent(
  () =>
    import('@/components/Shopping/Skeletons/CatalogListContainerSkeleton.vue')
)

import { centsToEuros } from '@/helpers/calculations'
</script>
