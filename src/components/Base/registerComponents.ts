import { type App } from 'vue'
import BaseLabel from '@/components/Base/BaseLabel.vue'
import BaseInput from '@/components/Base/BaseInput.vue'
import BaseButton from '@/components/Base/BaseButton.vue'
import BaseSteps from '@/components/Base/BaseSteps.vue'

export const registerBaseComponents = (app: App): void => {
  app.component('BaseInput', BaseInput)
  app.component('BaseLabel', BaseLabel)
  app.component('BaseButton', BaseButton)
  app.component('BaseSteps', BaseSteps)
}
