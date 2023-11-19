<template>
  <button
    v-bind="attrs"
    :class="btnClasses"
    :disabled="disabled || loading"
  >
    <div class="flex justify-center items-center gap-2">
      <span
        v-if="loading"
        class="border-gray-300 h-4 w-4 animate-spin rounded-full border-2 border-t-gray-400"
      >
      </span>
      <slot />
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import type { BaseButtonProps } from '@/types/components/Base/props'
const attrs = useAttrs()
const props = withDefaults(defineProps<BaseButtonProps>(), {
  type: 'primary',
  size: 'md',
  disabled: false,
  round: false,
  loading: false
})

const colorClasses = computed((): string => {
  const colorMappings = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 active:bg-gray-800',
    success: 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800',
    danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800',
    warning:
      'bg-yellow-600 text-white-100 hover:bg-yellow-700 active:bg-yellow-800',
    light: 'bg-gray-300 text-white-100',
    disabled: 'bg-gray-200 text-white'
  }
  return (
    colorMappings[props.disabled || props.loading ? 'disabled' : props.type] ||
    colorMappings.primary
  )
})

const sizeClasses = computed((): string => {
  const sizeMappings = {
    sm: 'h-8 text-sm px-4',
    md: 'h-10 px-6',
    lg: 'text-lg h-12 px-12'
  }

  return sizeMappings[props.size] || sizeMappings.md
})

const btnClasses = computed((): string => {
  const borderRadiusClasses = props.round ? 'rounded-full' : 'rounded'
  return `${colorClasses.value} ${sizeClasses.value} ${borderRadiusClasses}`
})
</script>
