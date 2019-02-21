<template>
  <div>
    <h1>{{ msg }}</h1>
     <!-- <router-link to="/">Goto App</router-link> -->
     <router-link to="/test">Goto Test</router-link>
    <p class="aaa" v-on:click="aaa">我点</p>
  </div>
</template>
<script type="text/javascript" src="../static/js/hello.js"></script>
<style lang="scss">
  @import "../static/css/hello.scss";
</style>
