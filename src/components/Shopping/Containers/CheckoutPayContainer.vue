<template>
  <BaseButton
    type="secondary"
    :loading="checkoutStore.isLoading"
    @click="handleSubmitPayment"
    >Pay</BaseButton
  >
</template>
<script setup lang="ts">
import { useCheckoutStore } from '@/store/Shopping/checkout'
import { useRouter } from 'vue-router'
import { Router_Name } from '@/enums/router'

const checkoutStore = useCheckoutStore()
const router = useRouter()

async function handleSubmitPayment() {
  const value = await checkoutStore.submitPayment()
  if (value) {
    router.replace({ name: Router_Name.CheckoutSuccess })
  }
}
</script>
