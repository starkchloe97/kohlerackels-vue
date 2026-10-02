import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Professionals from '@/pages/Professionals.vue'
import Services from '@/pages/Services.vue'
import Firm from '@/pages/Firm.vue'
import Locations from '@/pages/Locations.vue'
import Culture from '@/pages/Culture.vue'
import PrivacyPolicy from '@/pages/PrivacyPolicy.vue'
import NoticeAtCollection from '@/pages/NoticeAtCollection.vue'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path: '/', component: Home },
    { path: '/professionals', component: Professionals },
    { path: '/services', component: Services },
    { path: '/firm', component: Firm },
    { path: '/locations', component: Locations },
    { path: '/culture', component: Culture },
    { path: '/privacy-policy', component: PrivacyPolicy },
    { path: '/notice-at-collection', component: NoticeAtCollection },
  ],
})
