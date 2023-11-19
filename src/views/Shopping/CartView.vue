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
import CartListContainer from '@/components/Shopping/Containers/CartListContainer.vue'
import OverviewContainer from '@/components/Shopping/Containers/OverviewContainer.vue'
import VoucherContainer from '@/components/Shopping/Containers/VoucherContainer.vue'
</script>
