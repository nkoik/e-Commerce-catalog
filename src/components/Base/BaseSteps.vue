<template>
  <div>
    <ol
      class="flex items-center gap-2 text-sm font-medium text-gray-500 sm:gap-4"
    >
      <template
        v-for="(step, index) in steps"
        :key="index + step"
      >
        <li
          class="flex items-center justify-center gap-2 text-green-600"
          v-if="step.step < currentStep"
        >
          <span class="rounded bg-green-50 p-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <span> {{ step.title }} </span>
        </li>

        <li
          v-else-if="step.step === currentStep"
          class="flex items-center justify-center gap-2 text-blue-600"
        >
          <span
            class="h-6 w-6 rounded bg-blue-50 text-center text-[10px]/6 font-bold"
          >
            {{ index + 1 }}
          </span>

          <span> {{ step.title }} </span>
        </li>

        <li
          v-else
          class="flex items-center justify-end gap-2"
        >
          <span
            class="h-6 w-6 rounded bg-gray-50 text-center text-[10px]/6 font-bold text-gray-600"
          >
            {{ index + 1 }}
          </span>

          <span> {{ step.title }} </span>
        </li>
      </template>
    </ol>
  </div>
</template>
<script setup lang="ts">
import type { BaseStepsProps } from '@/types/components/Base/props'

withDefaults(defineProps<BaseStepsProps>(), {
  steps: () => [
    {
      title: 'Title',
      step: 1
    }
  ],
  currentStep: 1
})
</script>
