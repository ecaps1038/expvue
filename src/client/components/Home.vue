<template>
    <div>
    	
		<!-- <router-link to="/">Goto App</router-link> -->
		<div class="nav">
			<router-link to="/test">首页</router-link>
			<router-link to="/article">文章</router-link>
			<router-link to="/photography">摄影</router-link>
			<router-link to="/diary">随机</router-link>
			<router-link to="/test">Goto Test</router-link>
		</div>
		<router-view></router-view>
    </div>
</template>
<!-- <script type="text/javascript" src="../static/js/hello.js"></script> -->
<style lang="scss">
  @import "../static/css/hello.scss";
</style>
