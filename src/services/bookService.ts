import axios from 'axios';
import type { Book } from '@/model/book';

const apiClient = axios.create({
  baseURL: 'https://buecherverwaltung-booky.onrender.com/api/books', // Passe die URL an
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  async getBooks(): Promise<Book[]> {
    const response = await apiClient.get('/books');
    return response.data;
  },
  async searchBooks(query: string): Promise<Book[]> {
    const response = await apiClient.get('/books/search', { params: { query } });
    return response.data;
  },
};
