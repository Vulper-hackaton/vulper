<template>
    <div>
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
                    <router-link to="/login">
                        <div class="card card-body">
                            Mudar Perfil
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="pt-5 pl-5">
            <div class="pl-5">
                Perfis Pendentes:
            </div>
        </div>
        <div class="row justify-content-md-center p-3">
            <div class="col col-2"></div>
            <div id="coluna" class="col-8">
                <!-- Todas as divs aqui vão ser criadas conforme tiver solicitação de mensagem, se não tiver vai ficar em branco ou com uma mensagem -->
                <div id="pedido1" class="row justify-content-md-center p-3">
                    <div class="card mb-3" style="max-width: 70rem;">
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
                            <div class="col-md-2">
                                <div class="card-body">
                                    <div class="row justify-content-md-center">
                                        <router-link to="/login">
                                            <button
                                                    id="button1"
                                                    type="button"
                                                    class="btn rounded btn-sm"
                                            >
                                                Agendar
                                            </button>
                                        </router-link>
                                    </div>
                                    <div class="row justify-content-md-center mt-5">
                                        <router-link to="/login">
                                            <button
                                                    id="button2"
                                                    type="button"
                                                    class="btn rounded btn-sm"
                                            >
                                                excluir
                                            </button>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="pedido2" class="row justify-content-md-center p-3">ff</div>
                <div id="pedido3" class="row justify-content-md-center p-3">ff</div>
            </div>
            <div class="col col-2"></div>
        </div>
        <div class="pt-5 pl-5">
            <div class="pl-5">
                footer
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BrokerDashboard",
    };
</script>

<style lang="scss">
    #coluna {
        background-color: white;
    }
</style>
