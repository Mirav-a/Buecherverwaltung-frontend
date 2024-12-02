import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BookItem from '../BookItem.vue'

describe('BookItem', () => {
  it('renders book information properly', () => {
    // Mock-Daten für ein Buch
    const book = { id: 1, title: 'Der Herr der Ringe', author: 'J.R.R. Tolkien' }

    // Mounten der Komponente mit den Mock-Daten
    const wrapper = mount(BookItem, {
      props: { book },
    })

    // Überprüfen, ob der Titel und der Autor korrekt gerendert werden
    expect(wrapper.text()).toContain('Der Herr der Ringe')
    expect(wrapper.text()).toContain('J.R.R. Tolkien')
  })

  it('renders with default values if no book is provided', () => {
    // Mounten der Komponente ohne Props
    const wrapper = mount(BookItem)

    // Überprüfen der Standardwerte
    expect(wrapper.text()).toContain('Unbekannter Titel')
    expect(wrapper.text()).toContain('Unbekannter Autor')
  })

  it('renders a message when book prop is explicitly null', () => {
    // Mounten der Komponente mit einem null-Prop
    const wrapper = mount(BookItem, {
      props: { book: null },
    })

    // Überprüfen der Anzeige
    expect(wrapper.text()).toContain('Keine Buchdaten verfügbar')
  })
})
