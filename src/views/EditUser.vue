<template>
    <div id="home-container">
        <div id="p1" class="m-3 row justify-content-md-center">
            <div id="p12" class="col col-1"></div>

            <div id="p13" class="col col-10 p-5">
                <form>
                    <div class="form-group">
                        <label for="inputName">Digite seu nome:</label>
                        <input
                                type="text"
                                class="form-control"
                                id="inputName"
                        />
                    </div>
                    <form>
                        <div class="form-group">
                            <label for="exampleFormControlFile1">Example file input</label>
                            <input
                                    type="file"
                                    class="form-control-file"
                                    id="exampleFormControlFile1"
                            />
                        </div>
                    </form>

                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                        ></textarea>
                    </div>
                    <div class="row justify-content-md-center">
                        <div class="form-group p-3">
                            <label for="inputInstagram">Instagram:</label>
                            <input
                                    type="text"
                                    class="form-control"
                                    id="inputInstagram"
                            />
                        </div>
                        <div class="form-group p-3">
                            <label for="inputLinkedin">Linkedin:</label>
                            <input
                                    type="text"
                                    class="form-control"
                                    id="inputLinkedin"
                            />
                        </div>
                        <div class="form-group p-3">
                            <label for="exampleInputPassword1">facebook:</label>
                            <input
                                    type="text"
                                    class="form-control"
                                    id="exampleInputPassword1"
                            />
                        </div>
                    </div>
                </form>
            </div>

            <div id="p14" class="col col-1"></div>
        </div>

        <div id="p2" class="m-3 row justify-content-md-center">
            <div id="pedido1" class="row justify-content-md-center p-3">
                <div class="card mb-3" style="max-width: 60rem;">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="" class="card-img" alt="puxar do BD" />
                        </div>
                        <div class="col-md-4">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                    This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                    Oder info
                                </p>
                            </div>
                        </div>
                        <div class="col-md-2 p-3">
                            <div class="card-body">
                                <div
                                        class="row justify-content-md-center"
                                        style="display:flex;flex-direction:column;"
                                >
                                    <router-link to="/login">
                                        <button
                                                id="button1"
                                                type="button"
                                                class="btn rounded btn-block"
                                        >
                                            Salvar
                                        </button>
                                    </router-link>
                                </div>
                                <div
                                        class="row justify-content-md-center mt-2"
                                        style="display:flex;flex-direction:column;"
                                >
                                    <router-link to="/login">
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
                                    <router-link to="/login">
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
    export default {
        name: "EditUser",
    };
</script>

<style lang="scss">
    #p1 {
    }
    #p12 {
    }
    #p13 {
        background-color: #d1d1d1;
    }
</style>
