<template>
    <div>
        <div id="home-container" class="row m-5">
            <!-- Divisao da esquerda -->
            <div id="p1" class="col-sm">
                <!-- Pedir insercao dos dados  -->
                <div id="p11">
                    <p></p>
                    <h3>Insira seus dados</h3>
                </div>
                <!-- Carrega foto -->
                <p></p>
                <div id="p12">
                    <form>
                        <div class="custom-file col-5">
                            <input type="file" class="custom-file-input" id="customFile" @change="onFileSelected" ref="fileInput">
                            <label class="custom-file-label" for="customFile">Carregue sua foto</label>
                        </div>
                    </form>
                </div>
                <p></p>
                <!-- Efeito de linha separando -->
                <div class="card " style="width: 15rem;">
                    <ul class="list-group list-group-flush col-2"></ul>
                </div>
                <!-- Pede para digitar a porcentagem -->
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p>Digite a porcentagem ideal para seu perfil</p>
                <!-- Define as porcentagens -->
                <div id="p13" class="row" style="background-color: #f1f1f1;">
                    <!-- Moedas -->
                    <div id="p131" class="col-3">
                        <input
                                class="form-control"
                                type="text"
                                placeholder="Moeda"
                                style="border-radius: 15px 15px 15px 15px;"
                        />
                    </div>
                    <!-- Fixa -->
                    <div id="p132" class="col-3">
                        <input
                                class="form-control"
                                type="text"
                                placeholder="Fixa"
                                style="border-radius: 15px 15px 15px 15px;"
                        />
                    </div>
                    <!-- Variável -->
                    <div id="p133" class="col-3">
                        <input
                                class="form-control"
                                type="text"
                                placeholder="Variável"
                                style="border-radius: 15px 15px 15px 15px;"
                        />
                    </div>
                </div>
                <p></p>
                <!-- Efeito de linha separando -->
                <div class="card " style="width: 26rem;">
                    <ul class="list-group list-group-flush col-2"></ul>
                </div>
                <p></p>
                <p @click="getImg">Clique aqui para atualizar sua imagem</p>
            </div>
            <!-- Card -->
            <div id="p2" class="card col-sm">
                <div class="row">
                    <!-- Foto Broker -->
                    <div id="p22" class="col">
                        <div>
                            <img
                                    class="rounded-circle"
                                    id="imageprofile"
                                    :src="imgUrl" alt="Insira uma imagem primeiro"
                            />
                        </div>
                    </div>
                    <p></p>
                    <!-- Nome Broker  -->
                    <div id="p23" class="col-10">
                        <div class="col-10">
                            <input
                                    type="text"
                                    placeholder="Insira Seu Nome"
                                    style="border:none;"
                                    class="col-sm"
                            />
                        </div>
                    </div>
                    <p></p>
                    <!-- Anos de experiencia -->
                    <div id="p24" class="col-10">
                        <input
                                type="text"
                                placeholder="Insira quantos anos de experiência"
                                style="border:none;"
                                class="col-sm"
                        />
                    </div>
                    <p></p>
                    <!-- Descricao  -->
                    <div id="p25" class="col-10">
                        <div class="form-group">
                  <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="Insira uma breve descrição de até 200 caracteres"
                          maxlength="200"
                  ></textarea>
                        </div>
                    </div>
                    <p></p>
                    <!-- Grafico -->
                    <div id="p26" class="col"></div>
                    <p></p>
                    <!-- Taxa Administrativa  -->
                    <div id="p27" class="col-10">
                        <input
                                class="form-control"
                                type="text"
                                placeholder="Insira Taxa Administrativa Média"
                        />
                    </div>
                    <p></p>
                    <!-- Rentabilidade Média -->
                    <div id="p28" class="col">
                        <h4>Rentabilidade Média dos Clientes</h4>
                        <p>Insira os dados dos seguintes anos, se houver</p>
                        <form>
                            <div class="form-group row">
                                <label for="2015" class="col-3 col-form-label">2015</label>
                                <div class="col-sm-5">
                                    <input
                                            id="2015"
                                            class="form-control"
                                            type="text"
                                            placeholder="Insira Aqui"
                                    />
                                </div>
                            </div>
                        </form>
                        <form>
                            <div class="form-group row">
                                <label for="2016" class="col-3 col-form-label">2016</label>
                                <div class="col-sm-5">
                                    <input
                                            id="2016"
                                            class="form-control"
                                            type="text"
                                            placeholder="Insira Aqui"
                                    />
                                </div>
                            </div>
                        </form>
                        <form>
                            <div class="form-group row">
                                <label for="2017" class="col-3 col-form-label">2017</label>
                                <div class="col-sm-5">
                                    <input
                                            id="2017"
                                            class="form-control"
                                            type="text"
                                            placeholder="Insira Aqui"
                                    />
                                </div>
                            </div>
                        </form>
                        <form>
                            <div class="form-group row">
                                <label for="2018" class="col-3 col-form-label">2018</label>
                                <div class="col-sm-5">
                                    <input
                                            id="2018"
                                            class="form-control"
                                            type="text"
                                            placeholder="Insira Aqui"
                                    />
                                </div>
                            </div>
                        </form>
                        <form>
                            <div class="form-group row">
                                <label for="2019" class="col-3 col-form-label">2019</label>
                                <div class="col-sm-5">
                                    <input
                                            id="2019"
                                            class="form-control"
                                            type="text"
                                            placeholder="Insira Aqui"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- Inserir Corretora -->
            <div id="p3" class="card col-sm">
                <p></p>
                <div class="dropdown">
                    <button
                            class="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                    >
                        Insira sua corretora
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">XP investimentos</a>
                        <a class="dropdown-item" href="#">Invest Carlos</a>
                        <a class="dropdown-item" href="#">Independente</a>
                    </div>
                </div>
                <p></p>
                <!-- Efeito de linha separando -->
                <div class="card " style="width: 12rem;">
                    <ul class="list-group list-group-flush col-2"></ul>
                </div>
            </div>
        </div>
        <div class="row justify-content-md-center p-5">
            <div class="p-2">
                <router-link to="/login">
                    <button id="button1" type="button" class="btn rounded btn-block" @click="onUpload">
                        Salvar
                    </button>
                </router-link>
            </div>
            <div class="p-2">
                <router-link to="/user-dashboard">
                    <button type="button" class="btn rounded btn-block btn-secondary">
                        Sair
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>


<script>
    import * as firebase from "firebase/app";
    //import "firebase/auth";
    import axios from "axios"

    export default {
        name: "EditBroker",
        data() {
            return {
                selectedFile: null,
                imgUrl: null,
            }
        },
        methods: {
            onFileSelected(event) {
                this.selectedFile = event.target.files[0]
            },
            onUpload() {
                const fd = new FormData();
                // TODO: change to UID. Then change default.jpg to UID in getImg
                fd.append("image", this.selectedFile, this.selectedFile.name);
                axios.post('https://us-central1-vulper-hackaton.cloudfunctions.net/uploadFile', fd)
                    .then(() => {
                        console.log("uploaded!")
                    })
            },
            getImg(){
                const self = this;
                firebase.storage().ref('/').child('toggle-iphone-on.png').getDownloadURL().then(function(url) {
                    self.imgUrl = url;
                }).catch(function(error) {
                        console.log(error);
                });
            }
        }
    }
</script>

<style scoped>
    #dropdownMenuButton {
        border-radius: 20px 20px 20px 20px;
        background-color: white;
        color: black;
    }
    #p3 {
        background-color: #f1f1f1;
    }
    #home-container {
        background-color: #f1f1f1;
    }
</style>