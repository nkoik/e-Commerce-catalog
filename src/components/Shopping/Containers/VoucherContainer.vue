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
import type {
  Voucher,
  Vouchers
} from '@/types/components/Shopping/Containers/props'
import { computed, ref } from 'vue'

const VOUCHERS: Vouchers = {
  HAPPYBIRTHDAY: {
    type: 'percentage',
    value: 20,
    discountOn: 'total'
  },
  SUMMER: {
    type: 'price',
    value: 200,
    discountOn: 'total'
  },
  ILIKEAPPLES: {
    type: 'percentage',
    value: 60,
    discountOn: ['d65d349b-2a77-4fdb-9d7a-0ab85eb84fd1']
  },
  ILIKEPEARS: {
    type: 'percentage',
    value: 40,
    discountOn: ['34d69140-d883-48d5-9af6-cecae5e653e2']
  },
  GREEN: {
    type: 'percentage',
    value: 30,
    discountOn: [
      '51405659-f333-4f68-871d-fe0fc4706678',
      '34d69140-d883-48d5-9af6-cecae5e653e2'
    ]
  }
}
const hasErrors = ref(false)
const voucherText = computed({
  get: () => voucherStore.voucher,
  set: (value) => {
    voucherStore.setVoucher(value)
  }
})
const voucherStore = useVoucherStore()

function handleAddVoucher() {
  if (voucherText.value in VOUCHERS) {
    voucherStore.setDiscount(VOUCHERS[voucherText.value] as Voucher)
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
