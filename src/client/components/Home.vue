<template>
  <div class="main">
  	<div class="banner" :style="note">
  		<div class="bn-iner">
  			<p class="title" :style="suiy"></p>
  			<p class="some" v-html="msg"></p>
  		</div>
  	</div>
    <div class="content">
        <ul>
            <li v-for="html in htmls">
                <section class="cont-inf">
                    <div class="icon">
                        <img v-if="html.icon === '1'" src="../static/images/icon/artic.png">
                        <img v-else-if="html.icon === '2'" src="../static/images/icon/design.png">
                        <img v-else-if="html.icon === '3'" src="../static/images/icon/photograp.png">
                        <img v-else-if="html.icon === '4'" src="../static/images/icon/note.png">
                    </div>
                    <p class="date">{{html.date}}</p>
                    <p class="introduce">{{html.introduce}}</p>
                </section>
                <div class="photo-div">
                    <div class="photo-img-div">
                        <img :src="html.photo" class="photo-img"/>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <img src="../static/images/icon/artic.png">
        <router-link to="/home">Goto Ap</router-link>
  </div>
</template>
<script type="text/javascript" src="../static/js/home.js"></script>
<style lang="scss">
	@import "../static/css/home.scss";
</style>