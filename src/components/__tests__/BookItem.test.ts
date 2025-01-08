import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BookItem from '../BookItem.vue';
import type { Book } from '@/model/book';

describe('BookItem.vue', () => {
  it('renders book information properly', () => {
    const book: Book = {
      id: 1,
      title: 'Der Herr der Ringe',
      author: 'J.R.R. Tolkien',
      price: 15.99, // Füge den Preis hinzu
    };
    const wrapper = mount(BookItem, {
      props: { book },
    });

    expect(wrapper.text()).toContain('Der Herr der Ringe');
    expect(wrapper.text()).toContain('J.R.R. Tolkien');
  });

  it('renders default message when no book is provided', () => {
    const wrapper = mount(BookItem, {
      props: { book: null },
    });

    expect(wrapper.text()).toContain('Keine Buchdaten verfügbar');
  });
});
