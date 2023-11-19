<template>
  <section class="flex flex-col items-center justify-center gap-1 w-full">
    <BaseSteps
      :steps="routeSteps"
      :current-step="currentRouteStep"
    />
    <RouterView
      class="grid grid-cols-1 gap-4 bg-gray-300 p-4 w-full md:h-[80vh]"
    />
    <NavigationButtons
      :has-previous="currentRouteStep > minStep"
      :has-next="
        currentRouteStep < maxStep &&
        cartStore.cartTotalPriceAndItems.totalPrice > 0
      "
      @previous="handleNavigateToStep(currentRouteStep - 1)"
      @next="handleNavigateToStep(currentRouteStep + 1)"
    />
  </section>
</template>

<script setup lang="ts">
import NavigationButtons from '@/components/Shopping/Presentational/NavigationButtons.vue'
import { useNavigationBetweenSteps } from '@/composables/navigationBetweenSteps'
import { useCartStore } from '@/store/Shopping/cart'

const { routeSteps, currentRouteStep, minStep, maxStep, handleNavigateToStep } =
  useNavigationBetweenSteps()
const cartStore = useCartStore()
</script>
