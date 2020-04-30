import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login";
import Register from "../views/Register";
import NewBroker from "../views/NewBroker";
import UserDashboard from "../views/UserDashboard"
import BrokerDashboard from "../views/BrokerDashboard"
import MainHeader from "../components/MainHeader";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/user-dashboard",
    name: "userdashboard",
    component: UserDashboard,
  },
  {
    path: "/broker-dashboard",
    name: "BrokerDashboard",
    component: BrokerDashboard,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/new-broker",
    name: "NewBroker",
    component: NewBroker,
  },
  {
    path: "../components/main-header",
    name: "MainHeader",
    component: MainHeader,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
