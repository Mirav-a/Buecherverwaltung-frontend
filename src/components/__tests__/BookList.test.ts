import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BookList from '../BookList.vue'

describe('BookList', () => {
  it('renders the correct book titles and authors', () => {
    // Mount the BookList component
    const wrapper = mount(BookList)

    // Check if the expected book titles and authors are rendered
    expect(wrapper.text()).toContain('Der kleine Prinz')
    expect(wrapper.text()).toContain('Antoine de Saint-Exupéry')

    expect(wrapper.text()).toContain('1984')
    expect(wrapper.text()).toContain('George Orwell')

    expect(wrapper.text()).toContain('Moby Dick')
    expect(wrapper.text()).toContain('Herman Melville')
  })

  it('renders the correct number of BookItem components', () => {
    // Mount the BookList component
    const wrapper = mount(BookList)

    // Check the number of BookItem components
    const bookItems = wrapper.findAllComponents({ name: 'BookItem' })
    expect(bookItems.length).toBe(3)
  })
})
