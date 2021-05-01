import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import MallSearch from "../views/MallSearch.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "MallSearch",
    component: MallSearch,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
