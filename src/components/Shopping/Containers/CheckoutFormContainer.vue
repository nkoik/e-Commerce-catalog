<template>
  <slot name="header" />
  <template
    v-for="({ label, type, placeholder }, field) in props.inputFields"
    :key="field"
  >
    <div
      :class="[`${type}-${field}`]"
      class="flex flex-col mb-3"
      v-if="type === 'input'"
    >
      <BaseLabel :for="field">{{ label }}</BaseLabel>
      <BaseInput
        :id="field"
        type="text"
        :placeholder="placeholder"
        :value="checkoutStore.inputData[field]"
        @input="checkoutStore.setInputData($event.target.value, field)"
        :error="!!checkoutStore.errors[field]"
        @blur="handleInput($event.target.value, field)"
      >
        <template #error>
          <BaseError>{{ checkoutStore.errors[field] }}</BaseError>
        </template>
      </BaseInput>
    </div>
    <CheckoutExpirationDate
      v-else-if="type === 'date'"
      @date-update="handleDateUpdate"
      :error="!!checkoutStore.errors.expirationDate"
    >
      <template #error>
        <BaseError>{{ checkoutStore.errors.expirationDate }}</BaseError>
      </template>
    </CheckoutExpirationDate>
    <slot
      v-else
      :name="field"
    />
  </template>
  <slot name="footer" />
</template>

<script setup lang="ts">
import CheckoutExpirationDate from '@/components/Shopping/Presentational/CheckoutExpirationDate.vue'
import { formatCardNumber } from '@/helpers/utis'
import { useCheckoutStore } from '@/store/Shopping/checkout'
import type { CartFormContainerProps } from '@/types/components/Shopping/Containers/props'
import { onBeforeMount } from 'vue'

const props = withDefaults(defineProps<CartFormContainerProps>(), {})
const checkoutStore = useCheckoutStore()

function handleInput(value: string, type: string) {
  switch (type) {
    case 'cardNumber':
      checkoutStore.setInputData(formatCardNumber(value), type)
      break
    default:
      checkoutStore.setInputData(value, type)
  }
  checkoutStore.setErrors(type)
}

function handleDateUpdate(value: string) {
  handleInput(value, 'expirationDate')
}

onBeforeMount(() => {
  Object.keys(props.inputFields).forEach((key) => {
    checkoutStore.setInputData('', key)
  })
})
</script>
