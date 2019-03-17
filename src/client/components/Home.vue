<template>
  <div class="main">
  	<div class="banner" :style="note">
  		<div class="bn-iner">
  			<p class="title" :style="suiy"></p>
  			<p class="some" v-html="msg"></p>
  		</div>
  	</div>
     <router-link to="/home">Goto Ap</router-link>
  </div>
</template>
<script type="text/javascript" src="../static/js/home.js"></script>
<style lang="scss">
	@import "../static/css/home.scss";
</style>