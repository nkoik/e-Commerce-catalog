import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BaseSelect from '@/components/Base/BaseSelect.vue'

describe('BaseSelect', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(BaseSelect)

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('select').attributes('disabled')).toBeUndefined()
    expect(wrapper.find('.border-gray-400').exists()).toBe(true)
    expect(wrapper.find('option').text()).toBe('Select an option')
    expect(wrapper.find('.text-red-600').exists()).toBe(false)
  })

  it('renders options correctly', () => {
    const options = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' }
    ]

    const wrapper = mount(BaseSelect, {
      props: {
        options,
        selected: ''
      }
    })

    expect(wrapper.findAll('option')).toHaveLength(options.length + 1)
    expect(wrapper.find('option[value="option1"]').text()).toBe('Option 1')
    expect(wrapper.find('option[value="option2"]').text()).toBe('Option 2')
  })

  it('emits update:modelValue event on change', async () => {
    const wrapper = mount(BaseSelect)

    await wrapper.setData({ modelValue: 'selectedValue' })

    expect(wrapper.emitted('update:modelValue')).toHaveLength(1)
  })

  it('renders correctly with error state', () => {
    const wrapper = mount(BaseSelect, {
      props: {
        error: true,
        selected: ''
      }
    })

    expect(wrapper.find('.border-red-400').exists()).toBe(true)
    expect(wrapper.find('.text-red-600').exists()).toBe(true)
  })

  it('renders custom error message', () => {
    const wrapper = mount(BaseSelect, {
      props: {
        error: true,
        selected: ''
      },
      slots: {
        error: 'Custom error message'
      }
    })

    expect(wrapper.find('.text-red-600').text()).toBe('Custom error message')
  })

  it('renders correctly with selected value', () => {
    const wrapper = mount(BaseSelect, {
      props: {
        modelValue: 'option2',
        options: [
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' }
        ],
        selected: ''
      }
    })

    expect(wrapper.find('select').element.value).toBe('option2')
  })
})
