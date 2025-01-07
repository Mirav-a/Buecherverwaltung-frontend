import { mount } from '@vue/test-utils';
import BookList from '@/components/BookList.vue';
import { vi } from 'vitest';
import { flushPromises } from '@vue/test-utils'
vi.mock('axios', () => {
  return {
    default: {
      get: vi.fn(() =>
        Promise.resolve({
          data: [
            { id: 1, title: 'Der kleine Prinz', author: 'Antoine de Saint-Exupéry' },
            { id: 2, title: '1984', author: 'George Orwell' },
            { id: 3, title: 'Moby Dick', author: 'Herman Melville' },
          ],
        })
      ),
    },
  };
});

describe('BookList.vue', () => {
  it('renders the correct book titles and authors', async () => {
    const wrapper = mount(BookList);

    // Warten, bis die API-Daten geladen wurden
    await flushPromises();

    // Teste, ob die Bücher gerendert werden
    expect(wrapper.text()).toContain('Der kleine Prinz');
    expect(wrapper.text()).toContain('Antoine de Saint-Exupéry');
    expect(wrapper.text()).toContain('1984');
    expect(wrapper.text()).toContain('George Orwell');
    expect(wrapper.text()).toContain('Moby Dick');
    expect(wrapper.text()).toContain('Herman Melville');
  });
});
