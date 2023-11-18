<template>
  <div
    class="flex justify-center flex-col md:flex-row items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8"
  >
    <div
      class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6"
    >
      <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">
        {{ title }}
      </h3>
      <div
        v-for="(item, index) in items"
        :key="index"
      >
        <slot
          name="list"
          v-bind="item"
        ></slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { CartListProps } from '@/types/components/Shopping/Presentational/props'

withDefaults(defineProps<CartListProps>(), {
  title: 'Title',
  items: []
})
</script>
