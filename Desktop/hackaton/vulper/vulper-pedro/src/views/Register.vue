<template>
  <div id="body" class="container-fluid">
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

    <div class="error" v-if="error">{{ error.message }}</div>
    <div class="col pt-5"></div>
    <div class="col pt-5"></div>
    <div class="col pt-5"></div>
    <div class="col pt-5"></div>

    <div class="d-flex justify-content-center p-5">
      <form @submit.prevent="pressed">
        <div class="email input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon3">E-mail:</span>
          </div>
          <input
            type="EMAIL"
            class="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            v-model="email"
          />
        </div>

        <div class="password input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon3">Senha:</span>
          </div>
          <input
            class="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            type="password"
            v-model="password"
          />
        </div>

        <div class="row justify-content-center">
          <router-link to="">
            <button id="but0" type="submit" class="btn rounded">
              Submit
            </button>
          </router-link>
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
    pressed() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          // TODO: remove this from console
          console.log("deu certo!");
          this.$router.replace({ name: "about" });
        })
        .catch((error) => (this.error = error));
    },
  },
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
