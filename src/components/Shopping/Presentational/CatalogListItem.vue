<template>
  <div
    class="select-none bg-gray-100 rounded-md flex flex-1 items-center p-4 hover:shadow-sm my-1"
  >
    <div class="flex-1 pl-1">
      <div class="font-medium mb-1">{{ title }}</div>
      <div class="text-gray-600 text-md">{{ price }}</div>
    </div>
    <div class="text-gray-600 text-xs">
      <slot name="input" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CatalogListItemProps } from '@/types/components/Shopping/Presentational/props'
withDefaults(defineProps<CatalogListItemProps>(), {
  title: 'Title',
  price: '0'
})
</script>
