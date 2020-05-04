<template>
  <div id="home-container">
    <div id="p1" class="m-3 row" style="margin: 0!important;">
      <div id="p12" class="col col-1"></div>
      <div id="p13" class="col col-10 p-5">
        <div class="container" id="aviso">
          <p>Responda com valores tão aproximados quanto possível. Caso seus dados sejam maiores do que os oferecidos,
            marque o último valor</p>
        </div>
        <form>
          <div class="input-group mt-3 row col-20">
            <form action="" method="post" name="edit" oninput="age_output.value=parseInt(age.value);" class="container">
              <div class="container" id="age">
                <label>Quantos anos você tem?</label>
              </div>
              <label for="age-slider">Idade</label>
              <input type="range" class="custom-range" min="18" max="99" id="age-slider" name="age" v-model="userData.age">
              <output name="age_output" for="age-slider" ></output>
            </form>
          </div>

          <div class="input-group mt-3 row">
            <form action="" method="post" name="edit" oninput="patrimony_output.value=parseInt(patrimony.value);" class="container">
              <div class="container" id="patrimony">
                <label>Qual seu patrimônio aproximado?</label>
              </div>
              <label for="patrimony-slider">Patrimônio</label>
              <input type="range" class="custom-range" min="0" max="500000" id="patrimony-slider" step="1000" name="patrimony" v-model="userData.patrimony">
              <output name="patrimony_output" for="patrimony-slider" ></output>
            </form>
          </div>

          <div class="input-group mt-3 row">
            <form action="" method="post" name="edit" oninput="earning_output.value=parseInt(earning.value);" class="container">
              <div class="container" id="earning">
                <label>Qual sua renda média mensal?</label>
              </div>
              <label for="earning-slider">Renda</label>
              <input type="range" class="custom-range" min="1000" max="31000" id="earning-slider" step="1000" name="earning" v-model="userData.earning">
              <output name="earning_output" for="earning-slider"></output>
            </form>
          </div>

          <div class="input-group mt-3 row justify-content-center">
            <div class="col col-10 m-5  input-group-prepend mr-2 text-center" style="justify-content: center">
              <label id="experience-question" style="text-align: center"
                >Alguma vez você já investiu? Poupança não conta!</label
              >
            </div>
            <div class="col col-8 pl-5 ml-5">
              <div class="form-check p-2 m-2">
                <input v-model="userData.experience"
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios4"
                  id="exampleRadios1"
                  value="b1"
                  checked
                />
                <label class="form-check-label" for="exampleRadios1">
                  Invisto atualmente
                </label>
              </div>
              <div class="form-check p-2 m-2">
                <input v-model="userData.experience"
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios4"
                  id="exampleRadios2"
                  value="b2"
                />
                <label class="form-check-label" for="exampleRadios2">
                  Já investi no passado
                </label>
              </div>
              <div class="form-check p-2 m-2">
                <input v-model="userData.experience"
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios4"
                  id="exampleRadios3"
                  value="b3"
                />
                <label class="form-check-label" for="exampleRadios3">
                  Nunca Investi
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div id="p14" class="col col-1"></div>
    </div>
    <div class="row justify-content-center m-5">
      <div class="pb-5 pl-2">
        <button id="but0" type="submit" class="btn rounded" @click="onSubmit">
          Seguinte
        </button>
      </div>
      <div class="pb-5 pl-2">
        <button id="but1" type="submit" class="btn rounded" @click="onExit">
          Sair
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import * as firebase from "firebase/app";
  import "firebase/auth";
  require("firebase");

  export default {
  name: "Suitability",
  data() {
    return {
      userData: {
        age: "",
        patrimony: "",
        earning: "",
        experience: ""
      }
    }
  },
  methods : {
    onSubmit() {
      let userId = firebase.auth().currentUser.uid;
      for (let key in this.userData){
        if (!this.userData[key]){
          alert("Preencha todas as perguntas para continuar");
          return;
        }
      }
      firebase.firestore().collection('users').doc(userId).set(this.userData, {merge: true});
      this.$router.replace({ name: `suitability-${this.userData.experience}` });
    },
    onExit() {
      this.$router.replace({ name: "user-dashboard" });
    }
  }
};
</script>

<style lang="scss">
  #home-container {
    background-color: #f1f1f1;
  }
  #p1,
  #p12 {
    background-color: #f1f1f1;
  }
  #p13 {
    background-color: #d1d1d1;
  }
  #but0, #but1 {
    background: transparent linear-gradient(270deg, #4dde90 0%, #10c0c6 100%);
    font-family: "Lato", sans-serif;
  }
  #age, #patrimony, #earning, #experience-question{
    text-align:center;
  }
  #aviso{
    text-align:center;
  }
</style>
