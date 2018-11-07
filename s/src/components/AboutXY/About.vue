<template>
	<div id="app">
	  <div><img src="../../../static/about_img/header.png" alt="图片加载中" class="w100"></div>
	  <ul class="pd10 ul bgWhite clearfix">
	  	<li><router-link to="synopsis" tag="span">公司简介</router-link></li>
	  	<li><router-link to="prog" tag="span">发展历程</router-link></li>
	  	<li><router-link to="culture" tag="span">企业文化</router-link></li>
	  	<li><router-link to="team" tag="span">团队介绍</router-link></li>
	  	<li><router-link to="honor" tag="span">企业荣誉</router-link></li>
	  </ul>
	</div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
	#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.router-link-active{
  color: #FD8F24;
}
.pd10{
	margin: 0 15%;
}
.ul li{
	padding: 1rem;
	float: left;
	margin: 0 2rem;
}
</style>