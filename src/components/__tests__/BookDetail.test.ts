import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BookDetail from '../BookDetail.vue'

describe('BookDetail', () => {
  it('renders the book detail section', () => {
    // Mount the BookDetail component
    const wrapper = mount(BookDetail)

    // Check if the main elements are rendered
    expect(wrapper.find('.book-detail').exists()).toBe(true)
    expect(wrapper.find('h2').text()).toBe('Buchdetails')
    expect(wrapper.find('p').text()).toBe('Hier werden die Details des Buches angezeigt.')
  })
})
