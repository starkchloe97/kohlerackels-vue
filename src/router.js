import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Professionals from "@/pages/Professionals.vue";
import Services from "@/pages/Services.vue";
import Firm from "@/pages/Firm.vue";
import Locations from "@/pages/Locations.vue";
import Culture from "@/pages/Culture.vue";
import PrivacyPolicy from "@/pages/PrivacyPolicy.vue";
import NoticeAtCollection from "@/pages/NoticeAtCollection.vue";
import fullServiceOffices from "./pages/locations/full-service-offices.vue";
import OtherLocation from "./pages/locations/Other-location.vue";
import StatesPractice from "./pages/locations/States-practice.vue";
import History from "./pages/History.vue";
import CultureProBono from "./pages/Culture/Culture-pro-Bono.vue";
import EngagementAndOpportunity from "./pages/Culture/Engagement-and-opportunity.vue";
import CommunityServices from "./pages/Community-Services.vue";

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path: "/", component: Home },
    { path: "/professionals", component: Professionals },
    { path: "/services", component: Services },
    { path: "/firm", component: Firm },
    { path: "/locations", component: Locations },
    { path: "/culture", component: Culture },
    { path: "/privacy-policy", component: PrivacyPolicy },
    { path: "/notice-at-collection", component: NoticeAtCollection },
    { path: "/fullServiceOffices", component: fullServiceOffices },
    { path: "/OtherLocation", component: OtherLocation },
    { path: "/StatesPractice", component: StatesPractice },
    { path: "/History", component: History },
    { path: "/CultureProBono", component: CultureProBono },
    { path: "/EngagementAndOpportunity", component: EngagementAndOpportunity },
    { path: "/CommunityServices", component: CommunityServices },
    
  ],
});
