<template>
  <div class="catalog-container">
    <ul class="catalog-list">
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
    <div class="catalog-overview">
      <slot name="overview" />
    </div>
  </div>
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
