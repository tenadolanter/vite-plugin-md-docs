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
      {
        path: "/vue-start",
        name: "vue-start",
        component: () => import("../views/vue-start.md"),
      },
      {
        path: "/react-start",
        name: "react-start",
        component: () => import("../views/react-start.md"),
      },
    ],
  }
]

const router = new VueRouter({
  mode: "hash",
  routes
});

export default router;