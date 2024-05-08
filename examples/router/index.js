import Vue from 'vue'
import VueRouter  from "vue-router";
import Layout from "../layout/index.vue"
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    redirect: {
      path: '/page-start'
    },
    children: [
      {
        path: "/page-start",
        name: "page-start",
        component: () => import("../views/start.md"),
      },
    ],
  }
]

const router = new VueRouter({
  mode: "hash",
  routes
});

export default router;