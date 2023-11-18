<template>
  <div class="flex gap-1 w-full justify-end">
    <BaseButton
      :disabled="!hasPrevious"
      type="light"
      @click="emit('previous')"
      >Back</BaseButton
    >
    <BaseButton
      :disabled="!hasNext"
      type="secondary"
      @click="emit('next')"
      >Next</BaseButton
    >
  </div>
</template>

<script setup lang="ts">
import type { NavigationButtonsProps } from '@/types/components/Shopping/Presentational/props'

withDefaults(defineProps<NavigationButtonsProps>(), {
  hasPrevious: false,
  hasNext: false
})

const emit = defineEmits<{
  previous: [void]
  next: [void]
}>()
</script>
