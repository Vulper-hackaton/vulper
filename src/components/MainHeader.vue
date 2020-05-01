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
    <div id="user-status">
      <span v-if="logged">Bem-vindo, {{ username }} </span>
      <span v-else>Você não está logado</span>
      <!--Este botão é apenas provisório. TODO: retirá-lo daqui-->
      <span v-if="logged">
        <button class="but" @click="signOut">Sair</button>
      </span>
    </div>
  </div>
</template>

<script>
  import * as firebase from "firebase/app";
  import "firebase/auth";

  export default {
    data() {
      return {
        logged: false,
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
    },
    methods: {
      signOut() {
        if (this.logged){
        firebase.auth().signOut()
                .then(() => {
                  this.$router.replace({ name: "login" });
        });
        } else {console.log("Já estou deslogado!")}
      }
    }
  }
</script>

<style scoped>
  #main-header{
    /*TODO: arrumar o header*/
    background-color: #f1f1f1;
  }
  /*TODO: Arrumar user status e botão conforme design definido, em unidades relativas*/
  #user-status{
    text-align: right;
    margin-right: 40px;
  }
  .but{
    margin-left: 40px;
  }
</style>
