// import { createWebHistory, createRouter } from "vue-router";
import Vue from 'vue'
import Router from 'vue-router'
// import searchpage from '@/components/SearchPage.vue'
import home from '@/components/home.vue'
import searchpage from '@/components/SearchPage.vue'

Vue.use(Router)

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/search/:product/:price/:qty",
    name: "searchpage",
    component: searchpage,
  }

];

const router = new Router({
    mode: 'history',
    routes,
});

export default router;