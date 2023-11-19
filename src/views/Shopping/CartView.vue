<template>
  <section class="sm:grid-cols-2">
    <CartListContainer class="md:overflow-auto" />
    <aside class="h-full">
      <OverviewContainer class="mb-2" />
      <VoucherContainer />
    </aside>
  </section>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const CartListContainer = defineAsyncComponent(
  () => import('@/components/Shopping/Containers/CartListContainer.vue')
)
const OverviewContainer = defineAsyncComponent(
  () => import('@/components/Shopping/Containers/OverviewContainer.vue')
)
const VoucherContainer = defineAsyncComponent(
  () => import('@/components/Shopping/Containers/VoucherContainer.vue')
)
</script>
