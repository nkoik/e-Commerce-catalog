<template>
  <label
    :for="forId"
    class="form-label block mb-1 font-semibold text-gray-700"
  >
    <slot />
  </label>
</template>

<script setup lang="ts">
import type { BaseLabelProps } from '@/types/components/Base/props'

withDefaults(defineProps<BaseLabelProps>(), {
  forId: ''
})
</script>
