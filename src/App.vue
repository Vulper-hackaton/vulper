<template>
  <div>
    <main-header></main-header>
    <router-view/>
  </div>
</template>

<script>
  import MainHeader from "./components/MainHeader"
  export default {
    components: {'main-header': MainHeader}
  }
</script>>

<style>
  body {
    height: 100vh;
    margin: 0;
    background-color: #f1f1f1;
  }
</style>
