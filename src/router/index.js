import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
    { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
    { path: '/practice-areas', name: 'practice-areas', component: () => import('../views/PracticeAreasView.vue') },
    { path: '/people', name: 'people', component: () => import('../views/PeopleView.vue') },
    { path: '/contact', name: 'contact', component: () => import('../views/ContactView.vue') },
  ],
})

export default router