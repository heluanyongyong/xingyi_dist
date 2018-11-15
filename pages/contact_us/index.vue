<template>
	<div class="main">
		<div class="head">
			<img src="/contact_us/2018101915095848372@2x.png" alt="">
		</div>
		<div class="container">
			<h2>联系我们</h2>
			<div class="canvas">
			</div>
			<div class="info">
				<p class="title">深圳星移网络科技有限公司</p>
				<p>地址：深圳市龙岗坂田云里智能园3栋C4室</p>
				<p>Tel：0755-82575906  </p>
				<p>Fax：0755-82781032</p>
				<p>业务QQ咨询：1234567890</p>
				<p>电子邮箱：1234567890@163.com</p>
			</div>
		</div>
	</div>
</template>
<style scoped lang="styl">
@import '~assets/public.styl'
.main
	background rgb(248,248,248)
	.head
		img
			width 100%
	.container
		padding 40px 0 50px 0
		.canvas
			margin-top 20px
			width 1200px
			height 600px
			border 1px solid lightgray
		.info
			.title
				font-size 24px
				margin 30px 0 5px 0
</style>
<script>
import mapset from '../../components/map/map.vue'
export default{
	components:{
		mapset
	}
}
</script>