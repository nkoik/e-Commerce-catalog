<template>
  <CatalogContainer>
    <template #item="{ id, price, name }">
      <CatalogListItem>
        {{ name }} - Price {{ price / 100 }} Euro
        <BaseInput id="data" type="number" v-model="search">
          <template #label>
            <BaseLabel for="data">Test</BaseLabel>
          </template>
        </BaseInput>
      </CatalogListItem>
    </template>
  </CatalogContainer>
</template>

<script setup lang="ts">
import CatalogContainer from '@/components/Containers/Shopping/CatalogContainer.vue'
import CatalogListItem from '@/components/Presentation/Shopping/CatalogListItem.vue'
import { ref } from 'vue'

const search = ref('')
</script>
