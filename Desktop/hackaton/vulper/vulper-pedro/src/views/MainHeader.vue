<template>
  <div>
    <div id="header" class="row justify-content-between">
      <div id="logo" class="col-2 rounded">
        <router-link to="/">
          <div class="">
            <img
              src="../../public/assets/low-poly-gorilla.svg"
              class="img-responsive"
            />
          </div>
        </router-link>
      </div>
      <div id="name" class="col-2"></div>
    </div>
    <span v-if="logged">{{ username }}</span>
    <span v-else>Fazer Login</span>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "MainHeader",
  data() {
    return { logged: false, username: firebase.auth().currentUser.displayName };
  },
};
</script>

<style scoped></style>
