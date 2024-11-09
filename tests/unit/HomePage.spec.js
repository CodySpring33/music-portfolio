import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomePage from '@/views/HomePage.vue'

describe('HomePage.vue', () => {
  it('renders properly', () => {
    const wrapper = mount(HomePage)
    expect(wrapper.exists()).toBe(true)
  })
})
