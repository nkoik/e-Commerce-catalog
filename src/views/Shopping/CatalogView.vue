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
    </CatalogListContainer>
    <CatalogOverviewContainer />
  </section>
</template>

<script setup lang="ts">
import CatalogListContainer from '@/components/Shopping/Containers/CatalogListContainer.vue'
import CatalogAddItemContainer from '@/components/Shopping/Containers/CatalogAddItemContainer.vue'
import CatalogListItem from '@/components/Shopping/Presentational/CatalogListItem.vue'
import CatalogOverviewContainer from '@/components/Shopping/Containers/CatalogOverviewContainer.vue'
import { centsToEuros } from '@/helpers/calculations'
</script>
