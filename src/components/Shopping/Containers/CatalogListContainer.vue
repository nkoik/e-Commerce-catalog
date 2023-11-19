<template>
  <ul
    v-if="!catalogStore.isLoading"
    class="catalog-list"
  >
    <li
      v-for="(item, index) in catalogStore.catalog"
      :key="item.id"
      :class="[`catalog-list__item-${index}`]"
    >
      <slot
        name="list"
        v-bind="item"
      />
    </li>
  </ul>
  <template v-else>
    <slot name="loading" />
  </template>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useCatalogStore } from '@/store/Shopping/catalog'

const catalogStore = useCatalogStore()

onMounted(() => {
  if (catalogStore.catalog.length > 0) return
  catalogStore.getCatalog()
})
</script>
