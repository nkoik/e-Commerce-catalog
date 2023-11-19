import { defineAsyncComponent, type App } from 'vue'

export const registerBaseComponents = (app: App): void => {
  app.component(
    'BaseLabel',
    defineAsyncComponent(() => import('@/components/Base/BaseLabel.vue'))
  )
  app.component(
    'BaseInput',
    defineAsyncComponent(() => import('@/components/Base/BaseInput.vue'))
  )
  app.component(
    'BaseButton',
    defineAsyncComponent(() => import('@/components/Base/BaseButton.vue'))
  )
  app.component(
    'BaseSteps',
    defineAsyncComponent(() => import('@/components/Base/BaseSteps.vue'))
  )
  app.component(
    'BaseSelect',
    defineAsyncComponent(() => import('@/components/Base/BaseSelect.vue'))
  )
  app.component(
    'BaseError',
    defineAsyncComponent(() => import('@/components/Base/BaseError.vue'))
  )
}
