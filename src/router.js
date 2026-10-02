import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path: '/', component: () => import('./pages/Home.vue') },
    { path: '/professionals', component: () => import('./pages/Professionals.vue') },
    { path: '/services', component: () => import('./pages/Services.vue') },
    { path: '/firm', component: () => import('./pages/Firm.vue') },
    { path: '/locations', component: () => import('./pages/Locations.vue') },
    { path: '/culture', component: () => import('./pages/Culture.vue') },
    { path: '/privacy-policy', component: () => import('./pages/PrivacyPolicy.vue') },
    { path: '/notice-at-collection', component: () => import('./pages/NoticeAtCollection.vue') },
  ],
})

export default router
