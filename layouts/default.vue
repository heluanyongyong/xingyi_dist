<template>
	<div class="main">
		<topbar></topbar>
		<nuxt/>
		<footbar></footbar>
	</div>
</template>
<style scoped lang="stylus">
@import '../assets/public.styl'
.main
	min-width 1250px
	background #fff
</style>
<script>
import topbar from '../components/topbar.vue'
import footbar from '../components/footbar.vue'
export default{
	components:{
		topbar,
		footbar
	}
}
</script>