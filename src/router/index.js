import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/pc/Index.vue";
import HomeMobile from "../views/mobile/Index.vue";
const device = require('current-device').default

Vue.use(VueRouter);

const routesPC = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/pc/About.vue")
  }
];

const routesMobile = [
  {
    path: "/",
    name: "Home",
    component: HomeMobile
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/mobile/About.vue")
  }
];

let routes = [];

if (device.mobile()) {
  routes = routesMobile;
} else {
  routes = routesPC;
}

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
