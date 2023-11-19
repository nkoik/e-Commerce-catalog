<template>
  <div class="input-expiredate">
    <BaseLabel for="expirationMonth">Expiration date</BaseLabel>
    <div class="flex gap-1">
      <BaseSelect
        class="min-w-[100px]"
        id="month"
        placeholder="Month"
        :options="expirationMonthOptions"
        v-model="inputData.month"
        :error="error"
      />
      <BaseSelect
        class="min-w-[100px]"
        id="year"
        placeholder="Year"
        :options="expirationYearOptions"
        v-model="inputData.year"
        :error="error"
      />
    </div>
    <slot name="error" />
  </div>
</template>
<script setup lang="ts">
import { reactive, watch } from 'vue'
withDefaults(defineProps<{ error: boolean }>(), {
  error: false
})

const emit = defineEmits<{
  dateUpdate: [value: string]
}>()

const inputData: Record<'month' | 'year', string> = reactive({
  month: '',
  year: ''
})

const expirationMonthOptions = getNextMonths().map((month) => {
  return {
    label: month,
    value: month
  }
})

const expirationYearOptions = getNextYears(5).map((year) => {
  return {
    label: year,
    value: year
  }
})

function getNextYears(years: number): number[] {
  const date = new Date()
  const year = date.getFullYear()
  const yearList = []

  for (let i = 0; i <= years; i++) {
    yearList.push(year + i)
  }
  return yearList
}

function getNextMonths(): number[] {
  const date = new Date()
  const month = date.getMonth() + 1
  const monthList = []

  for (let i = month; i <= 12; i++) {
    monthList.push(i)
  }
  return monthList
}

watch(inputData, ({ month, year }) => {
  emit('dateUpdate', month && year ? `${month}/${year}` : '')
})
</script>
