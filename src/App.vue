<template>
  <div id="body" class="container-fluid">
    <div id="header" class="row justify-content-between">
      <div id= "logo" class="col-4 rounded">
      </div>
      <div id= "name" class="col-2">
      </div>
    </div>

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
            <button id="button1" type="button" class="btn rounded btn-block p-3">Defina seu perfil</button>
          </div>
      </div>

      <div class="row p-4">
        <div class="col col-4"></div>
        <div class="col col-4 "><div class="row justify-content-md-center"><button id="button2" type="button" class="btn rounded btn-sm">Profissional</button></div></div>
        <div class="col col-4"><div class="row justify-content-end"><button id="button3" type="button" class="btn rounded btn-sm">Acesso Direto</button></div></div>
      </div>

      
    </div>
  </div>
</template>

<style lang="scss">
#logo {
  background: transparent linear-gradient(90deg, #10C0C6 0%, #47D38C 100%, #086063 100%);
}
#name {
  background: transparent linear-gradient(90deg, #10C0C6 0%, #47D38C 100%, #086063 100%);
}

#body{
  background-color: #F1F1F1;
  min-height: 100vh;
}
#button1{
  background: transparent linear-gradient(270deg, #4DDE90 0%, #10C0C6 100%);
  font-family: 'Lato',sans-serif;
}
#bg{
}
#button2{
  background: transparent linear-gradient(270deg, #4DDE90 0%, #10C0C6 100%);
  font-family: 'Lato',sans-serif;
}
#button3{
  background: transparent linear-gradient(270deg, #4DDE90 0%, #10C0C6 100%);
  font-family: 'Lato',sans-serif;
}
</style>
