import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BaseInput from '@/components/Base/BaseInput.vue'

describe('BaseInput', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(BaseInput)

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('input').attributes('disabled')).toBeUndefined()
    expect(wrapper.find('.border-gray-400').exists()).toBe(true)
    expect(wrapper.find('.hover\\:border-indigo-300').exists()).toBe(true)
    expect(wrapper.find('.text-red-400').exists()).toBe(false)
  })

  it('emits update:modelValue event on input', async () => {
    const wrapper = mount(BaseInput)

    await wrapper.setData({ modelValue: 'inputValue' })

    expect(wrapper.emitted('update:modelValue')).toHaveLength(1)
  })

  it('renders correctly with error state', () => {
    const wrapper = mount(BaseInput, {
      props: {
        error: true
      }
    })

    expect(wrapper.find('.border-red-400').exists()).toBe(true)
    expect(wrapper.find('.text-red-400').exists()).toBe(true)
  })

  it('renders custom error message', () => {
    const wrapper = mount(BaseInput, {
      props: {
        error: true
      },
      slots: {
        error: 'Custom error message'
      }
    })

    expect(wrapper.find('.text-red-400').text()).toBe('Custom error message')
  })

  it('renders with custom attributes', () => {
    const wrapper = mount(BaseInput, {
      attrs: {
        id: 'custom-id',
        name: 'custom-name'
      }
    })

    expect(wrapper.find('input').attributes('id')).toBe('custom-id')
    expect(wrapper.find('input').attributes('name')).toBe('custom-name')
  })

  it('handles custom class binding', async () => {
    const wrapper = mount(BaseInput, {
      props: {
        error: true
      },
      attrs: {
        class: 'custom-class'
      }
    })

    expect(wrapper.classes('custom-class')).toBe(true)

    await wrapper.setProps({ error: false })
    expect(wrapper.classes('custom-class')).toBe(true)
    expect(wrapper.find('.border-red-400').exists()).toBe(false)

    await wrapper.setProps({ error: true })
    expect(wrapper.classes('custom-class')).toBe(true)
    expect(wrapper.find('.border-red-400').exists()).toBe(true)
  })
})
