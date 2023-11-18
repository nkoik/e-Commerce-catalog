<template>
  <CatalogContainer
    class="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-300 p-4"
  >
    <template #list="{ id, price, name }">
      <CatalogListItem
        :price="`${centsToEuros(price)} Eur/kg`"
        :title="name"
      >
        <template #input>
          <CatalogAddItemContainer
            class="flex items-end mx-1"
            :id="id"
          />
        </template>
      </CatalogListItem>
    </template>
  </CatalogContainer>
</template>

<script setup lang="ts">
import CatalogContainer from '@/components/Shopping/Containers/CatalogContainer.vue'
import CatalogAddItemContainer from '@/components/Shopping/Containers/CatalogAddItemContainer.vue'
import CatalogListItem from '@/components/Shopping/Presentational/CatalogListItem.vue'
import { centsToEuros } from '@/helpers/calculations'
</script>
