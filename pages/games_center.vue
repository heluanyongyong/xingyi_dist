<template>
    <div class="main">
    	<div class="top1">
			<div class="top1_left">星移网络科技有限公司</div>
			<ul class="top1_right">
				<li>
					<a href=""><img src="/games_center/20150815125126_XdBAr.thumb.700_0@2x.png" alt=""></a><span><a href="" class="active">星移盒子</a></span>
				</li>
				<li>
					<a href=""><img src="/games_center/退出@2x.png" alt=""></a><span><a href="">退出</a></span>
				</li>
				<li>
					<div class="pos_div">
						<input type="text" placeholder="请输入内容">
						<img src="/games_center/搜素 (1)@2x.png" alt="" class="inner_img">
					</div>
				</li>
			</ul>
    	</div>
    	<div class="top2">
			<div class="container">
				<div class="top2_left">
					<img src="/games_center/图层 1@2x.png" alt="">
					<span>星移盒子</span>
				</div>
				<div class="top2_right">
					<ul>
						<li><a href="" class="active">游戏中心</a></li>
						<li><a href="">下载中心</a></li>
						<li><a href="">在线充值</a></li>
						<li><a href="">关于星移</a></li>
						<li><a href="">商务合作</a></li>
					</ul>
				</div>
			</div>
    	</div>
    	<div class="top3">
    		<img src="/games_center/2018101915095848372@2x.png" alt="">
    	</div>
    	<div class="center">
    		<div class="content">
    			<div class="content_left">
    				<div class="content_left_top">
    					<div class="warp">
    						<div class="title">热门标签</div>
		    				<ul>
		    					<li><a href="" class="active">棋牌</a></li>
		    					<li><a href="">篮球</a></li>
		    					<li><a href="">单机</a></li>
		    					<li><a href="">免费</a></li>
		    					<li><a href="">职业</a></li>
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
    					<a href="">所有游戏</a>
    					<a href="">热门游戏</a>
    					<a href="">手机游戏</a>
    					<a href="">网页游戏</a>
    				</div>
    				<div class="gamecontent">
    					<ul>
    						<li v-for="item in 15" :key="item">
    							<div class="content">
	    							<img src="/games_center/oss_5bc6f94faf878@2x.png" alt="">
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
    	<div class="footer">
    		<div class="container">
    			<div class="foot_title">合作伙伴：</div>
	    		<ul class="foot_list">
	    			<li v-for="item in 8" :key="item"><a href="">星移盒子</a></li>
	    		</ul>
	    		<div class="clear"></div>
	    		<ul class="nav_list">
	    			<li>产品中心</li>
	    			<li>|</li>
	    			<li>下载中心</li>
	    			<li>|</li>
	    			<li>关于星移</li>
	    			<li>|</li>
	    			<li>商务合作</li>
	    			<li>|</li>
	    			<li>关于星移</li>
	    			<li>|</li>
	    			<li>联系我们</li>
	    		</ul>
	    		<div class="clear"></div>
	    		<p class="comment">Copyright © 2015-2018 WanPlus. All rights reserved | 深圳星移网络科技有限公司</p>
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
container()
	width 960px
	margin 0 auto
.clear
	clear both
.main
	min-width 1000px
	/*placehoder属性的默认颜色*/
	::-webkit-input-placeholder
		color #bfbfbf
	:-moz-placeholder
		color #bfbfbf
	::-moz-placeholder
		color #bfbfbf
	:-ms-input-placeholder
		color #bfbfbf
	background rgba(248,248,248,1)
	width 100%
	top1_h=50px
	.top1
		font-size 15px
		height top1_h
		container()
		color #999
		.top1_left
			line-height top1_h
			float left
		.top1_right
			float right
			height top1_h
			li
				float left
				height top1_h
				margin-left 15px
				line-height top1_h
				color #999
				img
					vertical-align middle
				span
					margin-left 5px
					vertical-align middle
					a.active
						color #FD8F24
				.pos_div
					width 160px
					position relative
					input
						font-size 12px
						width 100px
						height 50%
						border-radius 10px
						padding 0 40px 0 20px
					.inner_img
						width 10px
						position absolute
						right 15px
						top 50%
						transform translateY(-50%)
	top2_h=80px
	.top2
		height top2_h
		background rgba(255,255,255,1)
		.container
			container()
			.top2_left
				float left
				width 40%
				height 40px
				padding 20px 0
				img
					height 40px
					vertical-align middle
				span
					height 30px
					vertical-align middle
					font-size 20px
					font-weight bolder
			.top2_right
				float right
				width 60%
				li
					float left
					line-height top2_h
					width (100/5)%
					text-align right
					a
						color #888888
						font-size 19px
						&.active
							color #FD8F24
	.top3
		img
			width 100%
	.center
		container()
		padding-bottom 45px
		margin-top 45px
		height 920px
		.content
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
							font-weight bolder
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
						font-weight bolder
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
									font-weight bold
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
										font-weight bold
										margin-bottom 15px
									&.content
										font-size 12px
										&:last-child
											padding-bottom 15px
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
			.comment
				public_bottom()
				padding-bottom 40px
</style>

