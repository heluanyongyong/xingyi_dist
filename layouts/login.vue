<template>
	<div class="main_div">
		<logintop></logintop>
		<nuxt class="loginmain" style="background:url('/login/2018101915095848372@2x.png');" />
		<footbar></footbar>
		<div class="model_bg hide">
			<div class="model_content">
				123
			</div>
		</div>
	</div>
</template>

<style scoped lang="stylus">
@import '../assets/public.styl'
.main_div
	position fixed
	width 100%
	height 100%
.loginmain
	padding 60px 0
.model_bg
	position fixed
	width 100%
	height 100%
	background black !important
	opacity 0.5
	left 0
	top 0
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
