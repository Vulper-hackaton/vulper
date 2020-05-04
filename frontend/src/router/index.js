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
    name: "home",
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
    meta: {onlyUsers: true},
  },
  {
    path: "/broker-dashboard",
    name: "broker-dashboard",
    component: BrokerDashboard,
    meta: {onlyBrokers: true},
  },
  {
    path: "/suitability",
    name: "suitability",
    component: Suitability,
    meta: {onlyUsers: true},
  },
  {
    path: "/suitability-b1",
    name: "suitability-b1",
    component: SuitabilityBranchOne,
    meta: {onlyB1: true},
  },
  {
    path: "/suitability-b2",
    name: "suitability-b2",
    component: SuitabilityBranchTwo,
    meta: {onlyB2: true},
  },
  {
    path: "/suitability-b3",
    name: "suitability-b3",
    component: SuitabilityBranchThree,
    meta: {onlyB3: true},
  },
  {
    path: "/new-broker",
    name: "new-broker",
    component: NewBroker,
  },
  {
    path: "/edit-user",
    name: "edit-user",
    component: EditUser,
    meta: {onlyUsers: true},
  },
  {
    path: "/edit-broker",
    name: "edit-broker",
    component: EditBroker,
    meta: {onlyBrokers: true},
  },
  {
    path: "/chat",
    name: "chat",
    component: Chat,
    // TODO: resolver mecânicas do chat
    meta: {onlyAuth: true},
  },
  {
    path: "/about",
    name: "about",
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
  const onlyUsers = to.matched.some(record => record.meta.onlyUsers);
  const onlyBrokers = to.matched.some(record => record.meta.onlyBrokers);
  const onlyB1 = to.matched.some(record => record.meta.onlyB1);
  const onlyB2 = to.matched.some(record => record.meta.onlyB2);
  const onlyB3 = to.matched.some(record => record.meta.onlyB3);

  const isAuthenticated = firebase.auth().currentUser;
  if (!isAuthenticated){
    // TODO: add all categories
    if (onlyUsers || onlyBrokers || onlyB1 || onlyB2 || onlyB3) {
      alert("you are not authenticated!");
      next("/login");
    } else {
      next();
    }
  } else {
    let isUser = true;
    let isBroker = true;
    firebase.firestore().collection('users').doc(isAuthenticated.uid).get().then(doc => {
      if (!doc.exists) {
        isUser = false;
      } alert("I AM USER!" + isUser.toString())
    });
    firebase.firestore().collection('brokers').doc(isAuthenticated.uid).get().then(doc => {
      if (!doc.exists) {
        isBroker = false;
      } alert("I AM BROKER!" + isBroker.toString());
    });
    // TODO: CHANGE THE VARIABLES OUTSIDE THEIR SCOPE
    const isB1 = true;
    const isB2 = true;
    const isB3 = true;
    alert(isUser.toString() +" "+ isBroker.toString());
    if (onlyUsers && !isUser) {
      alert("only users allowed!");
    } else if (onlyBrokers && !isBroker) {
      alert("only brokers allowed!");
    } else if (onlyB1 && !isB1) {
      alert("only b1 allowed!");
    } else if (onlyB2 && !isB2) {
      alert("only b2 allowed");
    } else if (onlyB3 && !isB3) {
      alert("only b3 allowed");
    } else {
      next();
    }
  }
  console.log("Está autenticado", isAuthenticated);
});

export default router;
