<template>
  <div id="body" class="container-fluid">
    <div class="error" v-if="error">{{error.message}}</div>

    <div class="d-flex justify-content-center p-5">
      <form @submit.prevent="pressed">
        <div class="email input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">E-mail:</span>
          </div>
          <input type="email" v-model="email"/>
        </div>

        <div class="password input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon2">Senha:</span>
          </div>
          <input type="password" v-model="password"/>
        </div>

        <div class="row justify-content-center">
          <button id="but0" type="submit" class="btn rounded">
            Entrar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async pressed() {
        const self = this;
        await firebase.auth()
          .signInWithEmailAndPassword(this.email, this.password)
            .catch(error => {
              this.error = error;
            });

        if (!this.error){
          firebase.firestore().collection('brokers').doc(firebase.auth().currentUser.uid).get().then(
              doc => {
                if (!doc.exists){
                  self.$router.replace({ name: "broker-dashboard" });
                } else {
                  self.$router.replace({ name: "user-dashboard" });
                }
              });
        }
    }
  }
};
</script>

<style lang="scss" scoped>
#but0 {
  background: transparent linear-gradient(270deg, #4dde90 0%, #10c0c6 100%);
  font-family: "Lato", sans-serif;
}
#body {
  background-color: #f1f1f1;
  min-height: 100vh;
}
.error {
  color: red;
  font-size: 18px;
}
</style>
