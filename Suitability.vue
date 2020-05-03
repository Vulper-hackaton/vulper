<template>
  <div id="home-container">
    <div id="p1" class="m-3 row" style="margin: 0!important;">
      <div id="p12" class="col col-1"></div>
      <div id="p13" class="col col-10 p-5">
        <div class="container" id="aviso">
          <p>Caso seus dados estejam acima dos oferecidos, marcar último valor disponível</p>
        </div>
        <form>
          <div class="input-group mt-3 row col-20">
            <!-- <div class="col col-2 m-5 input-group-prepend mr-2">
              <span class="input-group-text" id="age-question" style="border-radius: 15px">Qual sua faixa etária?</span>
            </div> -->
            <form action="" method="post" name="edit" oninput="age_output.value=parseInt(age.value);" class="container">
              <div class="container" id="idade">
                <label>Quantos anos você tem?</label>
              </div>
              <input type="range" class="custom-range" min="0" max="99" id="start" name="age">
              <output name="age_output" for="start" ></output>
            </form>
            <!-- <div class="col col-8 pl-5">
              <div class="form-check p-2 m-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios1"
                  id="exampleRadios1-1"
                  value="option1"
                  checked
                />
                <label class="form-check-label" for="exampleRadios1-1">
                  25 anos ou menos.
                </label>
              </div>
              <div class="form-check p-2 m-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios1"
                  id="exampleRadios2-1"
                  value="option2"
                />
                <label class="form-check-label" for="exampleRadios2-1">
                  De 26 a 35.
                </label>
              </div>
              <div class="form-check p-2 m-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios1"
                  id="exampleRadios3-1"
                  value="option2"
                />
                <label class="form-check-label" for="exampleRadios3-1">
                  De 36 a 45.
                </label>
              </div>
              <div class="form-check p-2 m-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios4"
                  id="exampleRadios4-1"
                  value="option2"
                />
                <label class="form-check-label" for="exampleRadios4-1">
                  De 46 a 65.
                </label>
              </div>
              <div class="form-check p-2 m-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios1"
                  id="exampleRadios5-1"
                  value="option2"
                />
                <label class="form-check-label" for="exampleRadios5-1">
                  Mais de 65 anos.
                </label>
              </div>
            </div> -->
          </div>
          <div class="input-group mt-3 row">
            <!-- <div class="col col-2 m-5 input-group-prepend mr-2">
              <span class="input-group-text" id="patrimony-question"
                >Qual o seu patrimônio aproximado?
              </span>
            </div> -->
            <form action="" method="post" name="edit" oninput="age_output.value=parseInt(age.value);" class="container">
              <div class="container" id="idade">
                <label>Qual seu patrimônio aproximado?</label>
              </div>
              <input type="range" class="custom-range" min="0" max="800000" id="start" name="age" step="50000">
              <output name="age_output" for="start" ></output>
            </form>
            <!-- <p>Caso seja mais de 750000 marque 800000</p> -->
            <!-- <div class="col col-8 pl-5 ml-5">
              <div class="form-check p-2 m-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios2"
                  id="exampleRadios1-2"
                  value="option1"
                  checked
                />
                <label class="form-check-label" for="exampleRadios1-2">
                  Menos de R$50 mil.
                </label>
              </div>
              <div class="form-check p-2 m-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios2"
                  id="exampleRadios2-2"
                  value="option2"
                />
                <label class="form-check-label" for="exampleRadios2-2">
                  Entre R$50 mil e R$250 mil.
                </label>
              </div>
              <div class="form-check p-2 m-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios2"
                  id="exampleRadios3-2"
                  value="option2"
                />
                <label class="form-check-label" for="exampleRadios3-2">
                  Entre R$250 mil e R$500 mil.
                </label>
              </div>
              <div class="form-check p-2 m-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios2"
                  id="exampleRadios4-2"
                  value="option2"
                />
                <label class="form-check-label" for="exampleRadios4-2">
                  Entre R$500 mil e R$750mil.
                </label>
              </div>
              <div class="form-check p-2 m-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios2"
                  id="exampleRadios5-2"
                  value="option2"
                />
                <label class="form-check-label" for="exampleRadios5-2">
                  Mais de R$750mil.
                </label>
              </div>
            </div> -->
          </div>
          <div class="input-group mt-3 row">
            <!-- <div class="col col-2 m-5 input-group-prepend mr-2">
              <span class="input-group-text" id="monthly-question"
                >Qual sua renda média mensal?</span
              >
            </div> -->
            <form action="" method="post" name="edit" oninput="age_output.value=parseInt(age.value);" class="container">
              <div class="container" id="idade">
                <label>Qual sua renda média?</label>
              </div>
              <input type="range" class="custom-range" min="0" max="31000" id="start" name="age" step="1000">
              <output name="age_output" for="start" ></output>
            </form>
            <!-- <div class="col col-8 pl-5 ml-5">
              <div class="form-check p-2 m-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios3"
                  id="exampleRadios1-3"
                  value="option1"
                  checked
                />
                <label class="form-check-label" for="exampleRadios1-3">
                  Até R$4 mil.
                </label>
              </div>
              <div class="form-check p-2 m-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios3"
                  id="exampleRadios2-3"
                  value="option2"
                />
                <label class="form-check-label" for="exampleRadios2-3">
                  De R$4 mil até R$10 mil.
                </label>
              </div>
              <div class="form-check p-2 m-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios3"
                  id="exampleRadios3-3"
                  value="option2"
                />
                <label class="form-check-label" for="exampleRadios3-3">
                  De R$10mil até R$20 mil.
                </label>
              </div>
              <div class="form-check p-2 m-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios3"
                  id="exampleRadios4-3"
                  value="option2"
                />
                <label class="form-check-label" for="exampleRadios4-3">
                  De R$20mil até R$30 mil.
                </label>
              </div>
              <div class="form-check p-2 m-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios3"
                  id="exampleRadios5-3"
                  value="option2"
                />
                <label class="form-check-label" for="exampleRadios5-3">
                  Mais de R$30 mil.
                </label>
              </div>
            </div> -->
          </div>
          <div class="input-group mt-3 row justify-content-center">
            <div class="col col-10 m-5  input-group-prepend mr-2 text-center" >
              <span class="input-group-text text-center" id="experience-question"
                >Já investiu?</span
              >
            </div>
            <div class="col col-8 pl-5 ml-5">
              <div class="form-check p-2 m-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios4"
                  id="exampleRadios1"
                  value="option1"
                  checked
                />
                <label class="form-check-label" for="exampleRadios1">
                  Invisto
                </label>
              </div>
              <div class="form-check p-2 m-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios4"
                  id="exampleRadios2"
                  value="option2"
                />
                <label class="form-check-label" for="exampleRadios2">
                  Já investi
                </label>
              </div>
              <div class="form-check p-2 m-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios4"
                  id="exampleRadios3"
                  value="option2"
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
        <router-link to="/suitability">
          <button id="but0" type="submit" class="btn rounded">
            Seguinte
          </button>
        </router-link>
      </div>
      <div class="pb-5 pl-2">
        <router-link to="/edit-user">
          <button id="but1" type="submit" class="btn rounded">
            Sair
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditUser",
    // Authenticate on sumbission for enter a especific branch
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
#idade{
  text-align:center;
}
#aviso{
  text-align:center;
}
#experience-question{
  text-align:center;
}
</style>
