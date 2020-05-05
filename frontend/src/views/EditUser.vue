<template>
  <div id="home-container">
    <div id="p1" class="m-3 row" style="margin: 0!important;">
      <div id="p12" class="col col-1"></div>

      <div id="p13" class="col col-10 p-5">
        <form>
          <div class="form-group">
            <label for="inputName">Digite seu nome completo:</label>
            <input type="text" class="form-control" id="inputName" v-model="userData.name" />
          </div>
          <form>
            <div class="form-group">
              <label for="exampleFormControlFile1">Foto de perfil</label>
              <input
                type="file"
                class="form-control-file"
                id="exampleFormControlFile1"
                @change="onFileSelected"
              >
            </div>
          </form>

          <div class="form-group">
            <label for="exampleFormControlTextarea1">Descrição do perfil</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Insira uma breve descrição de até 200 caracteres"
              maxlength="200"
              v-model="userData.bio"
            ></textarea>
          </div>
          <div class="row justify-content-md-center">
            <div class="form-group p-3">
              <label for="inputTwitter">Twitter:</label>
              <input type="text" class="form-control" id="inputTwitter" placeholder="URL" v-model="userData.twitter"/>
            </div>
            <div class="form-group p-3">
              <label for="inputLinkedin">LinkedIn:</label>
              <input type="text" class="form-control" id="inputLinkedin" placeholder="URL" v-model="userData.linkedin"/>
            </div>
            <div class="form-group p-3">
              <label for="inputFacebook">Facebook:</label>
              <input type="text" class="form-control" id="inputFacebook" placeholder="URL" v-model="userData.facebook"/>
            </div>
          </div>
        </form>
      </div>

      <div id="p14" class="col col-1"></div>
    </div>

    <div id="p2" class="m-3 row justify-content-md-center">
      <div id="pedido1" class="row justify-content-md-center p-3">
        <div class="card mb-3" style="width: 60rem;">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img :src="imgUrl" class="card-img" alt="Foto de perfil" />
            </div>
            <div class="col-md-4">
              <div class="card-body">
                <h5 class="card-title">{{userData.name}}</h5>
                <p class="card-text">
                  {{userData.bio}}
                </p>
              </div>
            </div>
            <div class="col-md-2">
              <div class="card-body">
                <p class="card-text">{{userData.linkedin}}</p>
                <p class="card-text">{{userData.facebook}}</p>
                <p class="card-text">{{userData.twitter}}</p>
              </div>
            </div>
            <div class="col-md-2 p-3">
              <div class="card-body">
                <div
                  class="row justify-content-md-center mt-2"
                  style="display:flex;flex-direction:column;"
                >
                  <button @click="onUpload"
                    style="background: transparent linear-gradient(90deg, #10c0c6 0%, #47d38c 100%, #086063 100%) !important;"
                    type="button"
                    class="btn rounded btn-block btn-secondary">
                    Salvar
                  </button>
                </div>
                <div
                  class="row justify-content-md-center mt-2"
                  style="display:flex;flex-direction:column;"
                >
                  <router-link to="/suitability">
                    <button
                      type="button"
                      class="btn rounded btn-block btn-secondary"
                    >
                      Suitability
                    </button>
                  </router-link>
                </div>
                <div
                  class="row justify-content-md-center mt-2"
                  style="display:flex;flex-direction:column;"
                >
                  <router-link to="/user-dashboard">
                    <button
                      type="button"
                      class="btn rounded btn-block btn-secondary"
                    >
                      Sair
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as firebase from "firebase/app";
  import axios from "axios"

  export default {
    name: "EditBroker",
    data() {
      return {
        selectedFile: null,
        imgUrl: null,
        userData: {
          name: "",
          bio: "",
          twitter: "",
          linkedin: "",
          facebook: "",
        },
      }
    },
    methods: {
      onFileSelected(event) {
        this.selectedFile = event.target.files[0]
      },
      onUpload() {
        const fd = new FormData();
        let UserId = firebase.auth().currentUser.uid;

        const fileName = this.selectedFile.name;
        const extension = fileName.substring(fileName.lastIndexOf('.') + 1);
        fd.append("image", this.selectedFile, UserId + '.' + extension);
        axios.post('https://us-central1-vulper-hackaton.cloudfunctions.net/uploadFile', fd)
          .then(() => {
            console.log("uploaded!"); this.uploadData(UserId);
          })
      },
      async uploadData(filename){
        const self = this;
        await firebase.storage().ref('/').child(filename).getDownloadURL().then(function(url) {
          self.imgUrl = url;
        }).then((async function (){
          await firebase.firestore().collection('users').doc(filename).set({"pp":self.imgUrl}, {merge: true});
          await firebase.firestore().collection('users').doc(filename).set(self.userData, {merge: true});
        })).catch(function(error) {
          console.log(error);
        });
      }
    }
  }
</script>

<style lang="scss">
#home-container {
  background-color: #f1f1f1;
}
#p1, #p12 {
  background-color: #f1f1f1;
}
#p13 {
  background-color: #d1d1d1;
}
</style>
