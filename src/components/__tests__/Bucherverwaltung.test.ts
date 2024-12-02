import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Bucherverwaltung from '../Bucherverwaltung.vue'

describe('Bucherverwaltung', () => {
  it('renders the introduction message', () => {
    // Mount the Bucherverwaltung component
    const wrapper = mount(Bucherverwaltung)

    // Check if the main heading and paragraph are rendered
    expect(wrapper.find('.intro').exists()).toBe(true)
    expect(wrapper.find('h1').text()).toBe('Willkommen zur Bücherverwaltung!')
    expect(wrapper.find('p').text()).toContain('Diese Anwendung hilft Ihnen, Ihre Bücher effizient zu verwalten.')
  })

  it('renders the list of features', () => {
    // Mount the Bucherverwaltung component
    const wrapper = mount(Bucherverwaltung)

    // Check if the features section is rendered
    const features = wrapper.find('.features')
    expect(features.exists()).toBe(true)
    expect(features.find('h2').text()).toBe('Funktionen:')

    // Check the list items
    const listItems = features.findAll('li')
    expect(listItems.length).toBe(3)
    expect(listItems[0].text()).toBe('Bücher hinzufügen')
    expect(listItems[1].text()).toBe('Bücher bearbeiten und löschen')
    expect(listItems[2].text()).toBe('Details zu jedem Buch anzeigen')
  })
})
