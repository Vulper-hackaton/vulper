<template>
  <div id="home-container">
    <div id="p1" class="m-3 row" style="margin: 0!important;">
      <div id="p12" class="col col-1"></div>

      <div id="p13" class="col col-10 p-2">
        <div class="row justify-content-center">
          <div class="col col-3">
          <!-- a div men1 é gerada conforme solicitação de conversa aceita -->
            <div id="mens1" class="row justify-content-md-center p-1 pl-3">
              <div class="card" style="width: 100%">
                <div class="row no-gutters">
                  <div class="col-md-3">
                    <img src="" class="card-img" alt="puxar do BD" />
                  </div>
                  <div class="col">
                    <div class="card-body" style="margin: -10px!important;">
                      <h5 class="card-title" style=";">Person name</h5>
                      <p class="card-text">
                      preview message
                      </p>
                    </div>
                  </div>
                  
                  
                </div>
              </div>
            </div>
          </div>
          <!-- Insira chat aqui -->
          <div class="col col-9">
          
          
          
          
          </div>
        </div>
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
  name: "Chat",
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
#but0,
#but1 {
  background: transparent linear-gradient(270deg, #4dde90 0%, #10c0c6 100%);
  font-family: "Lato", sans-serif;
}
</style>
