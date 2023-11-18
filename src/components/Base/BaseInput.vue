<template>
  <slot name="label" />
  <div class="relative">
    <input
      :id="attrs.id as string"
      ref="input"
      class="border-2 border-gray-400 hover:border-indigo-300 px-2 py-2 h-12 leading-normal block w-full text-gray-800 bg-white font-sans rounded-lg text-left appearance-none outline-none"
      :class="[
        {
          'border-red-400': hasErrors
        },
        attrs.classes
      ]"
      :type="attrs.type as string"
      :value="modelValue"
      @input="updateValue"
      v-bind="attrs"
    />
    <div v-if="hasErrors" class="text-red-600 mt-1 text-sm">
      <slot name="error" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, useAttrs, useSlots } from 'vue'
import type { BaseInputProps } from '@/components/Base/types/props'

const attrs = useAttrs()
const slots = useSlots()

defineOptions({
  inheritAttrs: false
})
withDefaults(defineProps<BaseInputProps>(), {
  modelValue: ''
})
const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}

const hasErrors = computed(() => slots.error && slots.error.length)
</script>
