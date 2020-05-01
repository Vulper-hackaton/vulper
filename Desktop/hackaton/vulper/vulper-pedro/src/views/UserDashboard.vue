<template>
  <div id="body">
    <div class="row justify-content-end">
      <div>
        <p>
          <a
            class="btn btn-primary"
            data-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Substituir por menu
          </a>
        </p>
        <!-- Mudar esse collapse aqui quando tiver jquery-->
        <div class="" id="collapseExample">
          <router-link to="/login">
            <div class="card card-body">
              Mensagem
            </div>
          </router-link>
          <router-link to="/edit-user">
            <div class="card card-body">
              Mudar Perfil
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="row justify-content-md-center p-3">
      <div class="card m-3" style="width: 18rem;">
        <img
          class="card-img-top"
          src="../../public/assets/logo.png"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div class="row justify-content-md-center">
            <router-link to="/login">
              <button id="button1" type="button" class="btn rounded">
                Agendar Conversa
              </button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="card m-3" style="width: 18rem;">
        <img
          class="card-img-top"
          src="../../public/assets/logo.png"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div class="row justify-content-md-center">
            <router-link to="/login">
              <button id="button2" type="button" class="btn rounded">
                Agendar Conversa
              </button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="card m-3" style="width: 18rem;">
        <img
          class="card-img-top"
          src="../../public/assets/logo.png"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div class="row justify-content-md-center">
            <router-link to="/login">
              <button id="button3" type="button" class="btn rounded">
                Agendar Conversa
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserDashboard",
};
</script>

<style scoped></style>
