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
        :error="hasErrors"
      >
        <template #error>
          <span>Invalid voucher</span>
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
import { computed, ref } from 'vue'

const hasErrors = ref(false)
const voucherText = computed({
  get: () => voucherStore.voucher,
  set: (value) => {
    voucherStore.setVoucher(value)
  }
})
const voucherStore = useVoucherStore()

function handleAddVoucher() {
  if (voucherText.value in voucherStore.vouchers) {
    voucherStore.setDiscount(voucherStore.vouchers[voucherText.value])
    hasErrors.value = false
  } else {
    hasErrors.value = true
  }
}

function handleRemoveVoucher() {
  hasErrors.value = false
  voucherStore.removeDiscount()
}
</script>
