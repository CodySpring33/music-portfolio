import { mount } from '@vue/test-utils'
import HomePage from '@/views/HomePage.vue'

describe('HomePage.vue', () => {
  it('renders the correct title', () => {
    const wrapper = mount(HomePage)
    expect(wrapper.find('h1').text()).toBe('Jack Conklin')
  })

  it('renders the subtitle', () => {
    const wrapper = mount(HomePage)
    expect(wrapper.find('.subtitle').text()).toBe('Composer • Conductor • Educator')
  })
})
