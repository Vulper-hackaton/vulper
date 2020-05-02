<template>
  <div id="main-header" class="container-fluid">
    <div class="row">

      <div id="vulper-logo-name" style="font-family: 'Zilla Slab Highlight', cursive; font-size: 3vw;
      background: -webkit-linear-gradient(270deg, #4dde90 0%, #10c0c6 100%); padding: 0 0 0 1vw">
        Vulper
      </div>
      <div id="vulper-logo-img" class="col">
        <router-link to="/">
          <div class="">
            <img
                src="../../public/assets/low-poly-gorilla.svg"
                class="img-responsive"
                alt="Logo"
                style="margin-left: -3vw"
            />
            <!-- img src="../../public/assets/retangulo37.png" class="img-responsive" alt="plano de fundo"/-->
          </div>
        </router-link>
      </div>

      <div class="col" style="margin-top: 1%">
        <div id="name" class="col-2"></div>
        <div id="user-status">
          <span v-if="logged" style="font-size: 1.2vw">Bem-vindo, {{ username }} </span>
          <span v-else style="font-size: 1.2vw; justify-content: center">Você não está logado</span>
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
  #user-status{
    text-align: right;
    margin-right: 7.2%;
  }
  button{
    background: transparent linear-gradient(270deg, #4dde90 0%, #10c0c6 100%);
    font-family: "Lato", sans-serif;
    font-size: 1.2vw;
    margin-left: 6%;
    padding: 1% 4% 1% 4%;
    border-radius: 5px;
  }
  .img-responsive{
    min-height: 12%;
    min-width: 12%;
    max-height: 12%;
    max-width: 12%;
    display: block;
  }
  #vulper-logo-name{
    min-height: 12%;
    min-width: 12%;
    max-height: 12%;
    max-width: 12%;
  }
</style>
