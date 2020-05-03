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
                <p>Como são divididos os seus atuais investimentos</p>
                <!-- Define as porcentagens -->
                <div id="p13" class="row" style="background-color: #f1f1f1;">
                    <!-- Moedas -->
                    <div id="p131" class="col-3">
                        <input v-model="brokerData.Crypto"
                                class="form-control"
                                type="text"
                                placeholder="Crypto"
                                style="border-radius: 15px 15px 15px 15px;"
                        />
                    </div>
                    <!-- Fixa -->
                    <div id="p132" class="col-3">
                        <input v-model="brokerData.Fixed"
                                class="form-control"
                                type="text"
                                placeholder="Fixa"
                                style="border-radius: 15px 15px 15px 15px;"
                        />
                    </div>
                    <!-- Variável -->
                    <div id="p133" class="col-3">
                        <input v-model="brokerData.Variable"
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
            </div>
            <!-- Card -->
            <div id="p2" class="card col-sm">
                <div class="row">
                    <!-- Foto Broker -->
                    <div id="p22" class="col">
                        <div>
                            <img
                                    class="rounded-circle"
                                    id="imageprofile" style="block-size: 200px"
                                    :src="imgUrl" alt="Insira uma imagem (atualizada ao salvar)"
                            />
                        </div>
                    </div>
                    <p></p>
                    <!-- Nome Broker  -->
                    <div id="p23" class="col-10">
                        <div class="col-10">
                            <input v-model="brokerData.nameBroker"
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
                        <input v-model="brokerData.yearsExp"
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
                  <textarea v-model="brokerData.Bio"
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
                        <input v-model="brokerData.Fee"
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
                                    <input v-model="brokerData.profit2015"
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
                                    <input v-model="brokerData.profit2016"
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
                                    <input v-model="brokerData.profit2017"
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
                                    <input v-model="brokerData.profit2018"
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
                                    <input v-model="brokerData.profit2019"
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
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-secondary" type="button">Insira sua corretora</button>
                    </div>
                    <select class="custom-select" v-model="brokerData.Agency">
                        <option selected value="Independente">Independente</option>
                        <option value="Clear">Clear</option>
                        <option value="XP investimentos">XP investimentos</option>
                        <option value="Warren">Warren</option>
                    </select>
                </div>
                <p>{{brokerData.Agency}}</p>
                <!-- Efeito de linha separando -->
                <div class="card " style="width: 12rem;">
                    <ul class="list-group list-group-flush col-2"></ul>
                </div>
            </div>
        </div>
        <div class="row justify-content-md-center p-5">
            <div class="p-2">
                <button id="button1" type="button" class="btn rounded btn-block" @click="onUpload">
                    Salvar
                </button>
            </div>
            <div class="p-2">
                <router-link to="/broker-dashboard">
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
    import axios from "axios"

    export default {
        name: "EditBroker",
        data() {
            return {
                selectedFile: null,
                imgUrl: null,
                brokerData: {
                    Agency: "",
                    Crypto: "",
                    Fixed: "",
                    Variable: "",
                    nameBroker: "",
                    yearsExp: "",
                    Bio: "",
                    Fee: "",
                    profit2015: "",
                    profit2016: "",
                    profit2017: "",
                    profit2018: "",
                    profit2019: ""
                },
            }
        },
        methods: {
            onFileSelected(event) {
                this.selectedFile = event.target.files[0]
            },
            onUpload() {
                const fd = new FormData();
                let BrokerId = firebase.auth().currentUser.uid;

                const fileName = this.selectedFile.name;
                const extension = fileName.substring(fileName.lastIndexOf('.') + 1);
                fd.append("image", this.selectedFile, BrokerId + '.' + extension);
                axios.post('https://us-central1-vulper-hackaton.cloudfunctions.net/uploadFile', fd)
                    .then(() => {
                        console.log("uploaded!"); this.uploadData(BrokerId);
                    })
            },
            async uploadData(filename){
                const self = this;
                await firebase.storage().ref('/').child(filename).getDownloadURL().then(function(url) {
                    self.imgUrl = url;
                }).then((async function (){
                    await firebase.firestore().collection('brokers').doc(filename).set({"pp":self.imgUrl}, {merge: true});
                    await firebase.firestore().collection('brokers').doc(filename).set(self.brokerData, {merge: true});
                })).catch(function(error) {
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