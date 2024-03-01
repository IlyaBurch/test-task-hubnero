import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import TestView from "../views/TestView.vue";
import UsersView from "../views/UsersView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: { name: "users"},
      name: "home",
      component: HomeView,
    },
    {
      path: "/tools",
      name: "tools",
      component: TestView,
    },
    {
      path: "/chart",
      name: "chart",
      component: TestView,
    },
    {
      path: "/wallet",
      name: "wallet",
      component: TestView,
    },
    {
      path: "/attachment", 
      name: "attachment",
      component: TestView,
    },
    {
      path: "/document",
      name: "document",
      component: TestView,
    },
    {
      path: "/ticket",
      name: "ticket",
      component: TestView,
    },
    {
      path: "/settings",
      name: "settings",
      component: TestView,
    },
    {
      path: "/product-cart",
      name: "product-cart",
      component: TestView,
    },
    {
      path: "/users",
      name: "users",
      component: UsersView,
    },
    {
      path: "/error",
      name: "error",
      component: TestView,
    },
  ],
});

export default router;
