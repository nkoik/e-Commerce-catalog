import { type App } from 'vue'
import BaseLabel from '@/components/Base/BaseLabel.vue'
import BaseInput from '@/components/Base/BaseInput.vue'

export const registerBaseComponents = (app: App): void => {
  app.component('BaseInput', BaseInput)
  app.component('BaseLabel', BaseLabel)
}
