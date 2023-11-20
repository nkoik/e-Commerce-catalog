<template>
  <div class="relative">
    <select
      :id="attrs.id as string"
      :ref="`select-${attrs.id}`"
      class="cursor-pointer border-2 hover:border-indigo-300 leading-normal block w-full text-gray-800 bg-white font-sans rounded-lg text-left outline-none"
      :class="[error ? 'border-red-400' : 'border-gray-400']"
      :type="attrs.type as string"
      :value="modelValue"
      @change="updateValue"
      v-bind="attrs"
    >
      <option
        value=""
        disabled
        selected
      >
        {{ attrs.placeholder }}
      </option>
      <option
        v-for="option in options"
        :key="option.value"
        :selected="option.value === selected"
      >
        {{ option.label }}
      </option>
    </select>
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
import type { BaseSelectProps } from '@/types/components/Base/props'

const attrs = useAttrs()

defineOptions({
  inheritAttrs: false
})
withDefaults(defineProps<BaseSelectProps>(), {
  modelValue: '',
  error: false,
  options: [],
  selectedId: ''
})
const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>
