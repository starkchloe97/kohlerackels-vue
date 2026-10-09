import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Professionals from "@/pages/Professionals.vue";
import Services from "@/pages/Services.vue";
import Firm from "@/pages/Firm.vue";
import Locations from "@/pages/Locations.vue";
import Culture from "@/pages/Culture.vue";
import PrivacyPolicy from "@/pages/PrivacyPolicy.vue";
import NoticeAtCollection from "@/pages/NoticeAtCollection.vue";
import Disclaimer from "./pages/Disclaimer.vue";
import fullServiceOffices from "./pages/locations/full-service-offices.vue";
import OtherLocation from "./pages/locations/Other-location.vue";
import StatesPractice from "./pages/locations/States-practice.vue";
import History from "./pages/History.vue";
import CultureProBono from "./pages/Culture/Culture-pro-Bono.vue";
import EngagementAndOpportunity from "./pages/Culture/Engagement-and-opportunity.vue";
import CommunityServices from "./pages/Community-Services.vue";
import IntellectualProperty from "@/pages/Services/IntellectualProperty.vue";
import IntellectualPropertyLitigation from "@/pages/Services/IntellectualPropertyLitigation.vue";
import PatentCounselingAndProcurement from "@/pages/Services/PatentCounselingAndProcurement.vue";
import LifeSciencesIP from "@/pages/Services/LifeSciencesIP.vue";
import NMWatch from "@/pages/Services/NMWatch.vue";
import TrademarksAndCopyrights from "@/pages/Services/TrademarksAndCopyrights.vue";
import IntellectualPropertyTransactions from "@/pages/Services/IntellectualPropertyTransactions.vue";
import PatentLitigation from "@/pages/Services/PatentLitigation.vue";

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
    { path: "/services/intellectual-property", component: IntellectualProperty },
    { path: "/services/intellectual-property/litigation", component: IntellectualPropertyLitigation },
    { path: "/services/intellectual-property/patent-counseling", component: PatentCounselingAndProcurement },
    { path: "/services/intellectual-property/life-sciences", component: LifeSciencesIP },
    { path: "/services/intellectual-property/nmwatch", component: NMWatch },
    { path: "/services/intellectual-property/trademarks-copyrights", component: TrademarksAndCopyrights },
    { path: "/services/intellectual-property/transactions", component: IntellectualPropertyTransactions },
    { path: "/services/intellectual-property/patent-litigation", component: PatentLitigation },
     { path: "/Disclaimer", component: Disclaimer },
    
  ],
});
