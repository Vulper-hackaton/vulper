<template>
  <div id="main-header">
    <router-link to="/">
      <div class="">
        <img
            src="../../public/assets/low-poly-gorilla.svg"
            class="img-responsive"
            alt="Logo"/>
      </div>
    </router-link>
    <div id="name" class="col-2"></div>
    <span v-if="logged">{{ username }}</span>
    <span v-else>Fazer Login</span>
  </div>
</template>

<script>
  import * as firebase from "firebase/app";
  import "firebase/auth";

  // TODO: ARRUMAR O CSS NESSA MERDA

  export default {
    data() {
      return {
        username: "",
      };
    },
    created(){
      firebase.auth().onAuthStateChanged(user => {
        this.logged = !!user;
        if (this.logged) {
          // TODO: change to actual username
          try {
            this.username = firebase.auth().currentUser.email;
          } catch (e) {
            console.log(e)
          }
        }
      })
    }
  }
</script>

<style scoped>
  #main-header{

  }
</style>
