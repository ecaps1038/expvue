<template>
    <div>
    	
		<!-- <router-link to="/">Goto App</router-link> -->
		<div class="header">
			<div class="logo"><router-link to="/test" :style="note"></router-link></div>
			<div class="nav">
				<router-link to="/test">首页<i></i></router-link>
				<router-link to="/hello">文章<i></i></router-link>
				<router-link to="/photography">摄影<i></i></router-link>
				<router-link to="/diary">随记<i></i></router-link>
				<router-link to="/about">关于</router-link>
			</div>
			<div class="user"><i></i></div>
		</div>
		<router-view></router-view>
    </div>
</template>
<script type="text/javascript" src="../static/js/home.js"></script>
<style lang="scss">
  @import "../static/css/home.scss";
</style>
