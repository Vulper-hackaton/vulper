<template>
  <div id="body" class="container-fluid">
    <div>Registrar Cliente</div>

    <div class="error" v-if="error">{{ error.message }}</div>
    <div class="col pt-5"></div>
    <div class="col pt-5"></div>
    <div class="col pt-5"></div>
    <div class="col pt-5"></div>

    <div class="d-flex justify-content-center p-5">
      <form @submit.prevent="pressed">
        <div class="email">
          <input type="email" v-model="email" placeholder="email" />
        </div>
        <div class="password">
          <input type="password" v-model="password" placeholder="password" />
        </div>

        <router-link to="">
          <button id="but0" type="submit" class="btn rounded">
            Submit
          </button>
        </router-link>

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
