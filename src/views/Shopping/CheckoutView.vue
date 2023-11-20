<template>
  <section class="sm:grid-cols-2">
    <aside class="bg-gray-100 p-10">
      <CheckoutFormContainer
        :input-fields="{
          cardNumber: {
            label: 'Card number',
            type: 'input',
            placeholder: '0000 0000 0000 0000'
          },
          cardHolder: {
            label: 'Card holder',
            type: 'input',
            placeholder: 'John Doe'
          },
          cvv: {
            label: 'CVV',
            type: 'input',
            placeholder: '000'
          },
          expirationDate: {
            label: 'Expiration date',
            type: 'date'
          }
        }"
      >
        <template #footer>
          <CheckoutPayButtonContainer class="w-full mt-4" />
        </template>
      </CheckoutFormContainer>
    </aside>
    <OverviewContainer />
  </section>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const CheckoutFormContainer = defineAsyncComponent(
  () => import('@/components/Shopping/Containers/CheckoutFormContainer.vue')
)
const CheckoutPayButtonContainer = defineAsyncComponent(
  () =>
    import('@/components/Shopping/Containers/CheckoutPayButtonContainer.vue')
)
const OverviewContainer = defineAsyncComponent(
  () => import('@/components/Shopping/Containers/OverviewContainer.vue')
)
</script>
