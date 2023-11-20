import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BaseButton from '@/components/Base/BaseButton.vue'

describe('BaseButton', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(BaseButton)

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('button').attributes('disabled')).toBeUndefined()
    expect(wrapper.find('.bg-blue-600').exists()).toBe(true)
    expect(wrapper.find('.text-white').exists()).toBe(true)
    expect(wrapper.find('.hover\\:bg-blue-700').exists()).toBe(true)
    expect(wrapper.find('.active\\:bg-blue-800').exists()).toBe(true)
    expect(wrapper.find('.h-10').exists()).toBe(true)
    expect(wrapper.find('.px-6').exists()).toBe(true)
    expect(wrapper.find('.rounded').exists()).toBe(true)
    expect(wrapper.find('.animate-spin').exists()).toBe(false)
  })

  it('renders correctly with loading state', async () => {
    const wrapper = mount(BaseButton, {
      props: {
        loading: true
      }
    })

    expect(wrapper.find('.animate-spin').exists()).toBe(true)
    expect(wrapper.find('button').attributes('disabled')).toBe('disabled')

    await wrapper.vm.$nextTick()
  })

  it('renders correctly with custom props', () => {
    const wrapper = mount(BaseButton, {
      props: {
        type: 'success',
        size: 'lg',
        disabled: true,
        round: true
      }
    })

    expect(wrapper.find('.bg-green-600').exists()).toBe(true)
    expect(wrapper.find('.text-white').exists()).toBe(true)
    expect(wrapper.find('.h-12').exists()).toBe(true)
    expect(wrapper.find('.px-12').exists()).toBe(true)
    expect(wrapper.find('.rounded-full').exists()).toBe(true)
    expect(wrapper.find('.animate-spin').exists()).toBe(false)
  })

  it('emits click event when button is clicked', async () => {
    const wrapper = mount(BaseButton)

    await wrapper.trigger('click')

    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('renders correctly with custom text content', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Custom Button Text'
      }
    })

    expect(wrapper.text()).toContain('Custom Button Text')
  })

  it('renders correctly with disabled state', () => {
    const wrapper = mount(BaseButton, {
      props: {
        disabled: true
      }
    })

    expect(wrapper.find('button').attributes('disabled')).toBe('disabled')
    expect(wrapper.find('.bg-gray-200').exists()).toBe(true)
    expect(wrapper.find('.text-white').exists()).toBe(true)
  })

  it('renders correctly with rounded and loading state', () => {
    const wrapper = mount(BaseButton, {
      props: {
        round: true,
        loading: true
      }
    })

    expect(wrapper.find('.rounded-full').exists()).toBe(true)
    expect(wrapper.find('.animate-spin').exists()).toBe(true)
  })
})
