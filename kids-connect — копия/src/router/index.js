import { createRouter, createWebHistory } from 'vue-router'
import ListingPage from '../views/ListingPage.vue'
import DetailPage from '../views/DetailPage.vue'

const routes = [
  { path: '/', name: 'Listing', component: ListingPage },
  { path: '/sport/:id', name: 'Detail', component: DetailPage, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router