import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BaseSteps from '@/components/Base/BaseSteps.vue'

describe('BaseSteps', () => {
  it('renders correctly with one step', () => {
    const wrapper = mount(BaseSteps)

    expect(wrapper.exists()).toBe(true)

    expect(wrapper.find('.text-green-600').exists()).toBe(true)
    expect(wrapper.find('.text-green-600 span').text()).toContain('Title')
  })

  it('renders steps correctly with different states', async () => {
    const steps = [
      { title: 'Step 1', step: 1 },
      { title: 'Step 2', step: 2 },
      { title: 'Step 3', step: 3 }
    ]
    const currentStep = 2

    const wrapper = mount(BaseSteps, {
      props: {
        steps,
        currentStep
      }
    })

    expect(wrapper.findAll('li')).toHaveLength(steps.length)

    expect(wrapper.find('.text-blue-600').exists()).toBe(true)
    expect(wrapper.find('.text-blue-600 span').text()).toContain('2')
    expect(wrapper.find('.text-blue-600 span + span').text()).toContain(
      'Step 2'
    )

    expect(wrapper.findAll('.text-green-600')).toHaveLength(currentStep - 1)

    expect(wrapper.findAll('.text-gray-600')).toHaveLength(
      steps.length - currentStep
    )
  })
})
