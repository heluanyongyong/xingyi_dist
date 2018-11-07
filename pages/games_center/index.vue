<template>
    <div>
    	<div class="top3">
    		<img src="/games_center/2018101915095848372@2x.png" alt="">
    	</div>
    	<div class="center">
    		<div class="container">
    			<div class="content_left">
    				<div class="content_left_top">
    					<div class="warp">
    						<div class="title">热门标签</div>
		    				<ul>
		    					<li><a href="javascript:void(0);" class="active">棋牌</a></li>
		    					<li><a href="javascript:void(0);">篮球</a></li>
		    					<li><a href="javascript:void(0);">单机</a></li>
		    					<li><a href="javascript:void(0);">免费</a></li>
		    					<li><a href="javascript:void(0);">职业</a></li>
		    				</ul>
    					</div>
    				</div>
    				<div class="content_left_bottom">
						<div class="title">开服</div>
						<table>
							<thead>
								<tr>
									<td>游戏名称</td>
									<td>开服时间</td>
									<td>新服名称</td>
								</tr>
							</thead>
							<tbody>
								<tr v-for="item in 17" :key="item">
									<td>王者归来...</td>
									<td>10.29 14:00</td>
									<td>王者归来...</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<td colspan="3">
										<span></span>
										<span class="active"></span>
										<span></span>
									</td>
								</tr>
							</tfoot>
						</table>
    				</div>
    			</div>
    			<div class="content_right">
    				<div class="gametitle">
    					<a href="javascript:void(0);">所有游戏</a>
    					<a href="javascript:void(0);">热门游戏</a>
    					<a href="javascript:void(0);">手机游戏</a>
    					<a href="javascript:void(0);">网页游戏</a>
    				</div>
    				<div class="gamecontent">
    					<ul>
    						<li v-for="item in 15" :key="item">
    							<div class="content">
	    							<nuxt-link to="/games_center/infos"><img src="/games_center/oss_5bc6f94faf878@2x.png" alt=""></nuxt-link>
	    							<p class="title">剑灵</p>
	    							<p class="content">上线时间：2017-10-28</p>
	    							<p class="content">运营代理商：星移盒子</p>
    							</div>
    						</li>
    					</ul>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
</template>

<script>
export default{
    data(){
    	return{
    		
    	}
    },
    layout:'top'
}
</script>

<style scoped lang="styl">
@import '~assets/public.styl'
.top3
	img
		width 100%
.center
	padding 45px 0
	height 920px
	background rgba(248,248,248,1)
	.container
		container()
		.content_left
			float left
			width 25%
			public_content_left()
				width 90%
				background white
				color #666666
				font-size 22px
			.content_left_top
				public_content_left()
				.warp
					padding 30px 40px
					.title
						bold()
						margin-bottom 20px
						letter-spacing 2px
					li
						height 40px
						line-height 40px
						font-size 18px
						padding-left 20px
						a
							color #333333
							&.active
								color #FD8F24
			.content_left_bottom
				/*若改变此处，需要改变右边边对应上边距*/
				margin-top 29px
				public_content_left()
				.title
					padding 20px 0 10px 15px
					bold()
					letter-spacing 6px
				table
					public_tr(col,font,bg,pd)
						color col
						font-size font
						background bg
						width (100%/3)
						text-align center
						td
							width (100/3)%
							padding pd 0
					thead
						tr
							public_tr(#333,16px,#efefef,15px)
							td
								bold()
					tbody
						tr
							public_tr(#666,13px,#fff,7px)
					tfoot
						tr
							td
								text-align center
								padding-bottom 10px
								span
									width 10px
									height 10px
									background #d3d3d3
									border-radius 50%
									display inline-block
									&.active
										width 25px
										border-radius 10px
										background #FD8F24


		.content_right
			float right
			width 75%
			.gametitle
				a
					margin-right 50px
					color #010101
					font-size 20px
			.gamecontent
				ul
					li
						float left
						width 20%
						/*若改变此处，需要改变左边对应上边距*/
						margin-top 28px
						.content
							width 95%
							margin 0 2.5%
							background white
							img
								width 100%
							p
								text-align center
								margin-top 10px
								&.title
									font-size 18px
									bold()
									margin-bottom 15px
								&.content
									font-size 12px
									&:last-child
										padding-bottom 15px
</style>

