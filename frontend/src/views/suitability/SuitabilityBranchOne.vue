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
                                <label>Qual a dimensão do patrimônio que você tem investido?</label>
                            </div>
                            <label for="amountInvested-slider">Capital investido</label>
                            <input type="range" class="custom-range" min="10000" max="300000" id="amountInvested-slider" step="5000" name="amountInvested" v-model="userData.amountInvested">
                            <output name="amountInvested_output" for="amountInvested-slider" ></output>
                        </form>
                    </div>

                    <div class="input-group mt-3 row">
                        <form action="" method="post" name="edit" oninput="fixedPercentage_output.value=parseInt(fixedPercentage.value);" class="container">
                            <div class="container" id="fixedPercentage">
                                <label>Qual percentual desse patrimônio é investido em renda fixa?</label>
                            </div>
                            <label for="fixedPercentage-slider">Renda fixa</label>
                            <input type="range" class="custom-range" min="0" max="100" id="fixedPercentage-slider" step="1" name="fixedPercentage" v-model="userData.fixedPercentage">
                            <output name="fixedPercentage_output" for="fixedPercentage-slider" ></output>
                        </form>
                    </div>

                    <div class="input-group mt-3 row">
                        <form action="" method="post" name="edit" oninput="timeInvesting_output.value=parseFloat(timeInvesting.value);" class="container">
                            <div class="container" id="timeInvesting">
                                <label>Há quanto tempo você investe (em anos)?</label>
                            </div>
                            <label for="timeInvesting-slider">Anos de experiência</label>
                            <input type="range" class="custom-range" min="0.5" max="10" id="timeInvesting-slider" step="0.5" name="timeInvesting" v-model="userData.timeInvesting">
                            <div v-if="userData.timeInvesting!='10'">
                                <output name="timeInvesting_output" for="timeInvesting-slider" ></output>
                            </div>
                            <div v-else>
                                <p>10 anos ou mais</p>
                            </div>
                        </form>
                    </div>

                    <div class="input-group mt-3 row">
                        <form action="" method="post" name="edit" oninput="futureInvesting_output.value=parseInt(futureInvesting.value);" class="container">
                            <div class="container" id="futureInvesting">
                                <label>Por quanto tempo você pretende continuar investindo (em anos)?</label>
                            </div>
                            <label for="futureInvesting-slider">Estratégia</label>
                            <input type="range" class="custom-range" min="1" max="25" id="futureInvesting-slider" step="1" name="futureInvesting" v-model="userData.futureInvesting">
                            <div v-if="userData.futureInvesting!='25'">
                                <output  name="futureInvesting_output" for="futureInvesting-slider" ></output>
                            </div>
                            <div v-else>
                                <p>Tempo indeterminado</p>
                            </div>
                        </form>
                    </div>

                    <div class="input-group mt-3 row justify-content-center">
                        <div class="col col-10 m-5  input-group-prepend mr-2 text-center" style="justify-content: center">
                            <label id="riskProfile-question" style="text-align: center"
                            >O que você pretende ao manter esse investimento?</label
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
        name: "SuitabilityBranchOne",
        data() {
            return {
                userData: {
                    amountInvested: "",
                    fixedPercentage: "",
                    timeInvesting: "",
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
                let knowledge = 0;
                let userId = firebase.auth().currentUser.uid;
                for (let key in this.userData){
                    if (this.userData[key] === ""){
                        alert("Preencha todas as perguntas para continuar");
                        return;
                    }
                }
                for (let topic in this.userKnowledge){
                    if (this.userData[topic] !== ""){
                        knowledge += 1;
                    }
                }

                function sigmoid(t){ return 1/(1+Math.pow(Math.E, -t)) }

                firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get().then(doc => {
                    const userAge = doc.data().age;
                    const alpha = Math.max(this.userData.timeInvesting / userAge, knowledge/7);
                    let score = 50 + 50 * (Math.tanh(sigmoid(this.userData.fixedPercentage/25)
                        + Math.tanh(2 * alpha * (2 - Number(this.userData.riskProfile.slice(-1))))));
                    firebase.firestore().collection('users').doc(userId).set({experience: "", score: Math.round(score)}, {merge: true});
                });

                firebase.firestore().collection('users').doc(userId).set(this.userData, {merge: true});
                firebase.firestore().collection('users').doc(userId).set(this.userKnowledge, {merge: true});
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
    #amountInvested, #fixedPercentage, #timeInvesting, #futureInvesting, #riskProfile-question{
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
