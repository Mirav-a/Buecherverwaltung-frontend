import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import BookListView from '@/views/BookListView.vue';
import AddBookView from '@/views/AddBookView.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/books',
    name: 'BookList',
    component: BookListView,
  },
  {
    path: '/add-book',
    name: 'AddBook',
    component: AddBookView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
