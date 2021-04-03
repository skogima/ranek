import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Product from "@/views/Product.vue";

import User from "@/views/User";
import UserProducts from "@/views/User/UserProducts";
import UserPurchases from "@/views/User/UserPurchases";
import UserSales from "@/views/User/UserSales";
import UserEdit from "@/views/User/UserEdit";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/user",
    component: User,
    children: [
      {
        path: "",
        name: "User",
        component: UserProducts,
      },
      {
        path: "purchases",
        name: "UserPurchases",
        component: UserPurchases,
      },
      {
        path: "sales",
        name: "UserSales",
        component: UserSales,
      },
      {
        path: "edit",
        name: "UserEdit",
        component: UserEdit,
      },
    ],
  },
  {
    path: "/product/:id",
    name: "Product",
    component: Product,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

export default router;
