<template>
    <div>
        <span v-if="logged">{{ username }}</span>
        <span v-else>Fazer Login</span>
    </div>
</template>

<script>
    import * as firebase from "firebase/app"
    import "firebase/auth"
    export default {
        name: "MainHeader",
        data () {
            return{ logged: false, username: firebase.auth().currentUser.displayName }
        }
    }
</script>

<style scoped>

</style>