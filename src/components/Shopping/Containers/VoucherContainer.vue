<template>
  <section class="bg-gray-50 px-4 py-6 md:p-6 xl:p-8">
    <BaseLabel
      cl
      for="voucher"
      >Voucher</BaseLabel
    >
    <div class="flex items-center w-full gap-2 rounded-sm">
      <BaseInput
        id="voucher"
        type="text"
        v-model="voucherText"
        :disabled="voucherStore.isSelected"
        :error="voucherStore.hasError"
      >
        <template #error>
          <BaseError>Invalid voucher</BaseError>
        </template>
      </BaseInput>
      <BaseButton
        type="light"
        :disabled="isFieldEmpty(voucherText)"
        @click="handleRemoveVoucher"
        >Remove</BaseButton
      >
      <BaseButton
        type="secondary"
        :disabled="voucherStore.isSelected"
        @click="handleAddVoucher"
        >Apply</BaseButton
      >
    </div>
  </section>
</template>
<script setup lang="ts">
import { isFieldEmpty } from '@/helpers/validations'
import { useVoucherStore } from '@/store/Shopping/voucher'
import { ref } from 'vue'

const voucherText = ref('')
const voucherStore = useVoucherStore()

function handleAddVoucher() {
  voucherStore.setVoucher(voucherText.value)
}

function handleRemoveVoucher() {
  voucherText.value = ''
  voucherStore.removeDiscount()
}
</script>
