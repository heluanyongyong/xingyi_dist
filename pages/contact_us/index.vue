<template>
	<div class="main">
		<div class="head">
			<img src="/contact_us/banner.png" alt="">
		</div>
		<div class="container">
			<h2>联系我们</h2>
			<mapset class="canvas"></mapset>
			<!-- <no-ssr>
		    	<div class="amap-wrapper">
		    	  	<el-amap :vid="'amap-vue'"></el-amap>
		    	</div>
		    </no-ssr> -->
			<div class="info">
				<p class="title">深圳星移网络科技有限公司</p>
				<p>地址：深圳市龙岗坂田云里智能园3栋C4室</p>
				<p>Tel：0755-82575906  </p>
				<p>Fax：0755-82781032</p>
				<p>业务QQ咨询：18922841928</p>
				<p>电子邮箱：xingyi_sz@sina.com</p>
			</div>
		</div>
	</div>
</template>
<style scoped lang="styl">
@import '~assets/public.styl'
/*@css{
	.amap-wrapper {
		width: 1200px;
		height: 800px;
	}
}*/
.main
	background rgb(248,248,248)
	.head
		img
			width 100%
	.container
		padding 40px 0 50px 0
		.canvas
			margin-top 20px
			border 1px solid lightgray
		.info
			.title
				font-size 24px
				margin 30px 0 5px 0
</style>
<script>
import mapset from '../../components/map/map.vue'
export default{
	head(){
		return{
			title:'联系我们'
		}
	},
	components:{
		mapset
	}
}
</script>