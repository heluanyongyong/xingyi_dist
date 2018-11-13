<template>
	<div>
		<div class="footer">
    		<div class="container">
    			<div class="foot_title">合作伙伴：</div>
	    		<ul class="foot_list">
	    			<li v-for="item in 8" :key="item"><a href="javascript:void(0);">星移盒子</a></li>
	    		</ul>
	    		<div class="clear"></div>
	    		<ul class="nav_list">
	    			<li><a href="javascript:void(0);">产品中心</a></li>
	    			<li>|</li>
	    			<li><a href="javascript:void(0);">下载中心</a></li>
	    			<li>|</li>
	    			<li><a href="javascript:void(0);">关于星移</a></li>
	    			<li>|</li>
	    			<li><a href="javascript:void(0);">商务合作</a></li>
	    			<li>|</li>
	    			<li><a href="javascript:void(0);">关于星移</a></li>
	    			<li>|</li>
	    			<li><a href="javascript:void(0);">联系我们</a></li>
	    		</ul>
	    		<div class="clear"></div>
	    		<p class="comment">网络文化经营许可证：粤网文〔2017〕3969-775号</p>
	    		<p class="comment">Copyright © 2015-2018 WanPlus. All rights reserved | 深圳星移网络科技有限公司</p>
	    		<p class="comment">抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当 适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活</p>
    		</div>
    	</div>
	</div>
</template>
<style scoped lang="stylus">
@import '~assets/public.styl'
.footer
	background #111315
	.container
		container()
		color rgba(243,243,243,1)
		padding-top 40px
		.foot_title
			float left
		.foot_list
			font-size 15px
			margin-left 160px
			li
				float left
				width 200px
				margin-bottom 25px
				a
					color rgba(243,243,243,1)
		public_bottom()
			text-align center
			font-size 14px
			color #888
			margin-top 15px
		.nav_list
			width 100%
			public_bottom()
			li
				display inline-block
				a
					color #888
		.comment
			public_bottom()
			&:last-child
				padding-bottom 40px
</style>
<script>
export default{
	methods:{
	}
}
</script>