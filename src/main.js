import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import firebase from "@firebase/app";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyB8zPSstBRZXnDuxgmsNPmYROzd4x6nOQA",
  authDomain: "vulper-hackaton.firebaseapp.com",
  databaseURL: "https://vulper-hackaton.firebaseio.com",
  projectId: "vulper-hackaton",
  storageBucket: "vulper-hackaton.appspot.com",
  messagingSenderId: "388447340397",
  appId: "1:388447340397:web:49ba999a24459e77d43c64",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
