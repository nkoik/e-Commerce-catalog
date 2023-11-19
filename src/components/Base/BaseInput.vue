<template>
  <div class="relative">
    <input
      :id="attrs.id as string"
      ref="input"
      class="border-2 hover:border-indigo-300 px-2 py-2 leading-normal block w-full text-gray-800 bg-white font-sans rounded-lg text-left appearance-none outline-none"
      :class="[error ? 'border-red-400' : 'border-gray-400']"
      :type="attrs.type as string"
      :value="modelValue"
      @input="updateValue"
      v-bind="attrs"
    />
    <div
      v-if="error"
      class="text-red-600 mt-1 text-sm absolute bottom-[-20px]"
    >
      <slot name="error" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useAttrs } from 'vue'
import type { BaseInputProps } from '@/types/components/Base/props'

const attrs = useAttrs()

defineOptions({
  inheritAttrs: false
})
withDefaults(defineProps<BaseInputProps>(), {
  modelValue: '',
  error: false
})
const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>
