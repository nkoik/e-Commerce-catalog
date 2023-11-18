<template>
  <ul class="divide-y-2 divide-gray-100">
    <li v-for="item in catalogStore.catalog" :key="item.id">
      <slot name="item" v-bind="item" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useCatalogStore } from '@/store/Shopping/catalog'

const catalogStore = useCatalogStore()

onMounted(() => {
  catalogStore.getCatalog()
})
</script>
