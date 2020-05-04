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
                        <form action="" method="post" name="edit" oninput="amountInvested_output.value=parseInt(amountInvested.value);" class="container">
                            <div class="container" id="amountInvested">
                                <label>Qual a dimensão aproximada patrimônio que você pretende investir?</label>
                            </div>
                            <label for="amountInvested-slider">Capital a ser investido</label>
                            <input type="range" class="custom-range" min="1000" max="100000" id="amountInvested-slider" step="1000" name="amountInvested" v-model="userData.amountInvested">
                            <output name="amountInvested_output" for="amountInvested-slider" ></output>
                        </form>
                    </div>

                    <div class="input-group mt-3 row">
                        <form action="" method="post" name="edit" oninput="fixedPercentage_output.value=parseInt(fixedPercentage.value);" class="container">
                            <div class="container" id="fixedPercentage">
                                <label>De 0 (mas arriscado) a 100 (mais seguro), quão disposto você está a correr riscos em detrimento de uma maior rentabilidade?</label>
                            </div>
                            <label for="fixedPercentage-slider">Intolerância ao risco</label>
                            <input type="range" class="custom-range" min="0" max="100" id="fixedPercentage-slider" step="1" name="fixedPercentage" v-model="userData.fixedPercentage">
                            <output name="fixedPercentage_output" for="fixedPercentage-slider" ></output>
                        </form>
                    </div>

                    <div class="input-group mt-3 row">
                        <form action="" method="post" name="edit" oninput="futureInvesting_output.value=parseInt(futureInvesting.value);" class="container">
                            <div class="container" id="futureInvesting">
                                <label>Por quanto tempo você pretende investir (em anos)?</label>
                            </div>
                            <label for="futureInvesting-slider">Anos de aplicação</label>
                            <input type="range" class="custom-range" min="1" max="25" id="futureInvesting-slider" step="1" name="futureInvesting" v-model="userData.futureInvesting">
                            <div v-if="userData.futureInvesting!='25'">
                                <output name="futureInvesting_output" for="futureInvesting-slider" ></output>
                            </div>
                            <div v-else>
                                <p>Tempo indeterminado</p>
                            </div>
                        </form>
                    </div>

                    <div class="input-group mt-3 row justify-content-center">
                        <div class="col col-10 m-5  input-group-prepend mr-2 text-center" style="justify-content: center">
                            <label id="riskProfile-question" style="text-align: center"
                            >O que você pretende com esse novo investimento?</label
                            >
                        </div>
                        <div class="col col-8 pl-5 ml-5">
                            <div class="form-check p-2 m-2">
                                <input v-model="userData.riskProfile"
                                       class="form-check-input"
                                       type="radio"
                                       name="exampleRadios4"
                                       id="exampleRadios1"
                                       value="p1"
                                       checked
                                />
                                <label class="form-check-label" for="exampleRadios1">
                                    Proteger meu patrimônio sem me submeter a riscos.
                                </label>
                            </div>
                            <div class="form-check p-2 m-2">
                                <input v-model="userData.riskProfile"
                                       class="form-check-input"
                                       type="radio"
                                       name="exampleRadios4"
                                       id="exampleRadios2"
                                       value="p2"
                                />
                                <label class="form-check-label" for="exampleRadios2">
                                    Valorizar meu patrimônio me submetendo aos menores riscos possíveis.
                                </label>
                            </div>
                            <div class="form-check p-2 m-2">
                                <input v-model="userData.riskProfile"
                                       class="form-check-input"
                                       type="radio"
                                       name="exampleRadios4"
                                       id="exampleRadios3"
                                       value="p3"
                                />
                                <label class="form-check-label" for="exampleRadios3">
                                    Valorizar meu patrimônio lidando com riscos controláveis, sem comprometer minha estabilidade financeira.
                                </label>
                            </div>
                            <div class="form-check p-2 m-2">
                                <input v-model="userData.riskProfile"
                                       class="form-check-input"
                                       type="radio"
                                       name="exampleRadios4"
                                       id="exampleRadios4"
                                       value="p4"
                                />
                                <label class="form-check-label" for="exampleRadios4">
                                    Valorizar meu patrimônio sob algum risco de comprometer minha estabilidade financeira.                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="input-group mt-3 row justify-content-center">
                        <div class="col col-10 m-5  input-group-prepend mr-2 text-center" style="justify-content: center">
                            <label id="knowledge-question" style="text-align: center"
                            >Para cada conjunto de ativos financeiros, assinale-o se você sabe como funciona sua a emissão/negociação</label
                            >
                        </div>
                        <div class="rowk">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" v-model="userKnowledge.g1" value="g1">CDB, LCA, LFs, Títulos Públicos
                                </label>
                            </div>
                        </div>
                        <div class="rowk">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" v-model="userKnowledge.g2" value="g2">Debêntures, CRI, CRA, CDCA, CCB, CPR, FIDC
                                </label>
                            </div>
                        </div>
                        <div class="rowk">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" v-model="userKnowledge.g3" value="g3">Ações
                                </label>
                            </div>
                        </div>
                        <div class="rowk">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" v-model="userKnowledge.g4" value="g4">Derivativos Listados em Bolsa - mercado futuro e de opções
                                </label>
                            </div>
                        </div>
                        <div class="rowk">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" v-model="userKnowledge.g5" value="g5">COE - Certificado de Operações Estruturadas
                                </label>
                            </div>
                        </div>
                        <div class="rowk">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" v-model="userKnowledge.g6" value="g6">FIP, FII - Fundos estruturados
                                </label>
                            </div>
                        </div>
                        <div class="rowk">
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" v-model="userKnowledge.g7" value="g7">Criptomoedas
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
        name: "SuitabilityBranchThree",
        data() {
            return {
                userData: {
                    amountInvested: "",
                    fixedPercentage: "",
                    futureInvesting: "",
                    riskProfile: ""
                },
                userKnowledge: {
                    g1: "",
                    g2: "",
                    g3: "",
                    g4: "",
                    g5: "",
                    g6: "",
                    g7: ""
                }
            }
        },
        methods : {
            onSubmit() {
                let userId = firebase.auth().currentUser.uid;
                for (let key in this.userData){
                    if (this.userData[key] === ""){
                        alert("Preencha todas as perguntas para continuar");
                        return;
                    }
                }
                firebase.firestore().collection('users').doc(userId).set(this.userData, {merge: true});
                firebase.firestore().collection('users').doc(userId).set(this.userKnowledge, {merge: true});
                firebase.firestore().collection('users').doc(userId).set({timeInvesting: "0"}, {merge: true});
                firebase.firestore().collection('users').doc(userId).set({experience: ""}, {merge: true});
                this.$router.replace({ name: "user-dashboard" });
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
    #amountInvested, #fixedPercentage, #futureInvesting, #futureInvesting, #riskProfile-question{
        text-align:center;
    }
    #aviso{
        text-align:center;
    }
    .rowk{
        min-width: 50%;
        max-width: 50%;
        margin-left: 15vw;
    }
</style>
