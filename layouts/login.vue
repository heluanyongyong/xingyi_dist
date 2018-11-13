<template>
	<div class="main_div">
		<logintop></logintop>
		<nuxt class="loginmain" style="background:url('/login/2018101915095848372@2x.png');"/>
		<footbar></footbar>
	</div>
</template>

<style scoped lang="stylus">
@import '../assets/public.styl'
.main_div
	min-width 1250px
.loginmain
	padding 60px 0
	background-size 100% 100% !important
</style>

<script>
import footbar from '../components/footbar.vue'
import logintop from '../components/logintop.vue'
export default{
	components:{
		footbar,
		logintop
	}
}
</script>
