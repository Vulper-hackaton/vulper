<template>
  <div id="main-header" class="container-fluid">
    <div class="row">

      <div style="font-family: 'Zilla Slab Highlight', cursive; font-size: 3rem; color: #4dde90; padding: 0 0 0 10px">
        Vulper
      </div>
      <div class="col">
        <router-link to="/">
          <div class="">
            <img
                src="../../public/assets/low-poly-gorilla.svg"
                class="img-responsive"
                alt="Logo"/>
          </div>
        </router-link>
      </div>

      <div class="col" style="margin-top: 1%">
        <div id="name" class="col-2"></div>
        <div id="user-status">
          <span v-if="logged">Bem-vindo, {{ username }} </span>
          <span v-else>Você não está logado</span>
          <!--Este botão é apenas provisório. TODO: retirá-lo daqui-->
          <span v-if="logged">
            <button type="button" class="btn rounded btn-sm" @click="signOut">Sair</button>
          </span>
          <span v-else>
            <button type="button" class="btn rounded btn-sm" @click="logIn">Login</button>
          </span>
        </div>
      </div>

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
      },
      logIn() {
        if (!this.logged){
          this.$router.replace({ name: "login" });
        } else { console.log("Já estou logado!") }
      }
    }
  }
</script>

<style scoped>
  #main-header{
    /*TODO: arrumar o header*/
    background-color: #d1d1d1;
  }
  /*TODO: Arrumar user status e botão conforme design definido, em unidades relativas*/
  #user-status{
    text-align: right;
    margin-right: 40px;
  }
  button{
    background: transparent linear-gradient(270deg, #4dde90 0%, #10c0c6 100%);
    font-family: "Lato", sans-serif;
    margin-left: 20px;
    padding: 4px 20px 4px 20px;
    border-radius: 5px;
  }
</style>
