import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login";
import Register from "../views/Register";
import NewBroker from "../views/NewBroker";
import UserDashboard from "../views/UserDashboard"
import BrokerDashboard from "../views/BrokerDashboard"
import EditUser from "../views/EditUser";
import EditBroker from "../views/EditBroker"
import Suitability from "../views/suitability/Suitability";
import SuitabilityBranchOne from "../views/suitability/SuitabilityBranchOne";
import SuitabilityBranchTwo from "../views/suitability/SuitabilityBranchTwo";
import SuitabilityBranchThree from "../views/suitability/SuitabilityBranchThree";
import Chat from "../views/Chat"

import * as firebase from "firebase/app";
import "firebase/auth";

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
    name: "user-dashboard",
    component: UserDashboard,
  },
  {
    path: "/broker-dashboard",
    name: "BrokerDashboard",
    component: BrokerDashboard,
  },
  {
    path: "/suitability",
    name: "Suitability",
    component: Suitability,
  },
  {
    path: "/suitability-b1",
    name: "SuitabilityBranchOne",
    component: SuitabilityBranchOne,
  },
  {
    path: "/suitability-b2",
    name: "SuitabilityBranchTwo",
    component: SuitabilityBranchTwo,
  },
  {
    path: "/suitability-b3",
    name: "SuitabilityBranchThree",
    component: SuitabilityBranchThree,
  },
  {
    path: "/new-broker",
    name: "NewBroker",
    component: NewBroker,
  },
  {
    path: "/edit-user",
    name: "EditUser",
    component: EditUser,
  },
  {
    path: "/edit-broker",
    name: "EditBroker",
    component: EditBroker
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  console.log("Está autenticado", isAuthenticated);
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
