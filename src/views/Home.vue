<template>
  <div id="home-container">
    <div class="col pt-5"></div>
    <div class="col pt-5"></div>
    <div class="col pt-5"></div>
    <div class="col pt-5"></div>
    <div class="col pt-5"></div>
    <div class="col pt-5"></div>
    <div class="col pt-5"></div>

    <div class="col pt-5">

      <div class="row justify-content-md-center">
        <div id="bg" class="col col-lg-3">
          <router-link to="/register">
            <button
              id="button1"
              type="button"
              class="btn rounded btn-block p-3"
            >
              Cadastro de Cliente
            </button>
          </router-link>
        </div>
      </div>

      <div class="row p-4">
        <div class="col col-4"></div>
        <div class="col col-4 ">
          <div class="row justify-content-md-center">
            <router-link to="/new-broker">
              <button id="button2" type="button" class="btn rounded btn-sm">
                Cadastro de Broker
              </button>
            </router-link>
          </div>
        </div>

        <div class="col col-4">
          <div class="row justify-content-end">
            <router-link to="/login">
              <button id="button3" type="button" class="btn rounded btn-sm">
                Login
              </button>
            </router-link>
          </div>
        </div>

      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style lang="scss">
  .img-responsive {
    height: auto;
    width: auto;
    max-height: 72px;
    max-width: 72px;
  }
  #home-container{
    background-color: #f1f1f1;
  }
  #logo {
    background: transparent
      linear-gradient(90deg, #10c0c6 0%, #47d38c 100%, #086063 100%);
  }
  #name {
    background: transparent
      linear-gradient(90deg, #10c0c6 0%, #47d38c 100%, #086063 100%);
  }

  #body {
    background-color: #f1f1f1;
    min-height: 100vh;
  }
  #button1 {
    background: transparent linear-gradient(270deg, #4dde90 0%, #10c0c6 100%);
    font-family: "Lato", sans-serif;
  }
  #bg {
  }
  #button2 {
    background: transparent linear-gradient(270deg, #4dde90 0%, #10c0c6 100%);
    font-family: "Lato", sans-serif;
  }
  #button3 {
    background: transparent linear-gradient(270deg, #4dde90 0%, #10c0c6 100%);
    font-family: "Lato", sans-serif;
  }
</style>
