<template>
	<div id="app">
	  <div><img src="/about_img/header.png" alt="图片加载中" class="w100"></div>
	  <ul class="pd10 ul bgWhite clearfix">
	  	<li><nuxt-link to="/about_xingyi/synopsis" tag="span">公司简介</nuxt-link></li>
	  	<li><nuxt-link to="/about_xingyi/prog" tag="span">发展历程</nuxt-link></li>
	  	<li><nuxt-link to="/about_xingyi/culture" tag="span">企业文化</nuxt-link></li>
	  	<li><nuxt-link to="/about_xingyi/team" tag="span">团队介绍</nuxt-link></li>
	  	<li><nuxt-link to="/about_xingyi/honor" tag="span">企业荣誉</nuxt-link></li>
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
.nuxt-link-active{
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