import { createRouter, createWebHistory, RouteLocationNormalized } from 'vue-router';
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import EpilepsyFacts from '@/components/EpilepsyFacts.vue';
import Resources from '@/components/Resources.vue';
import FirstAid from '@/components/FirstAid.vue';
import Contact from '@/components/Contact.vue';
import Aydin from '@/components/Aydin.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/epilepsy-facts', component: EpilepsyFacts },
  { path: '/resources', component: Resources },
  { path: '/first-aid', component: FirstAid },
  { path: '/contact', component: Contact },
  { path: '/aydin', component: Aydin },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to: RouteLocationNormalized, from: RouteLocationNormalized, savedPosition: any) {
    // If there's a saved position (back/forward buttons), use it
    if (savedPosition) {
      return savedPosition;
    }
    // Otherwise, scroll to top for all route changes
    return { top: 0, behavior: 'smooth' };
  },
});

export default router;
