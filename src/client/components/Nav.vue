<template>
    <div>
    	
		<!-- <router-link to="/">Goto App</router-link> -->
		<div class="header">
			<div class="logo"><router-link to="/home" :style="note"></router-link></div>
			<div class="nav">
				<router-link to="/home">首页<i></i></router-link>
				<router-link to="/works">作品<i></i></router-link>
				<router-link to="/article">文章<i></i></router-link>
				<router-link to="/diary">随记<i></i></router-link>
				<router-link to="/about">关于</router-link>
			</div>
			<div class="user"><i></i></div>
		</div>
		<router-view></router-view>
		<footer>
				<div> hhhhhhh </div>
		</footer>
    </div>
</template>
<script type="text/javascript" src="../static/js/nav.js"></script>
<style lang="scss">
  @import "../static/css/nav.scss";
</style>
