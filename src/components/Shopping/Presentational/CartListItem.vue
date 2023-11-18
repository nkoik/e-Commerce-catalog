<template>
  <div class="flex justify-between items-center w-full">
    <slot name="action" />
    <p class="text-base dark:text-white leading-4 text-gray-800">{{ title }}</p>
    <p class="text-base dark:text-white leading-4 text-gray-800">
      {{ quantity }}
    </p>
    <p class="text-base dark:text-gray-300 leading-4 text-gray-600">
      {{ price }}
    </p>
  </div>
</template>
<script setup lang="ts">
import type { CartListItemProps } from '@/types/components/Shopping/Presentational/props'

withDefaults(defineProps<CartListItemProps>(), {
  title: 'Title',
  quantity: '',
  price: ''
})
</script>
