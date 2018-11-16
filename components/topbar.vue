<template>
	<div>
		<div class="top1">
			<div class="container">
				<div class="top1_left">星移网络科技有限公司</div>
				<ul class="top1_right">
					<!-- <li @mouseover="pos_show" @mouseout="pos_hide">
						<a href="javascript:void(0);"><img src="/games_center/20150815125126_XdBAr.thumb.700_0@2x.png" alt=""></a>
						<span><a href="javascript:void(0);" class="active">星移盒子</a></span>
						<div class="active_box hide">
							<div><nuxt-link to="/personal_center"><img src="/games_center/用户中心@2x.png" alt=""><span>用户中心</span></nuxt-link></div>
							<div><img src="/games_center/退出@2x.png" alt=""><span> 退出</span></div>
						</div>
					</li> -->
					<li>
						<nuxt-link to="/login" class="active">登录</nuxt-link>
						 | 
						<nuxt-link to="/login/register">注册</nuxt-link>
					</li>
					<li>
						<a href="javascript:void(0);"><img src="/games_center/message.png" alt="" @click="$router.push('/message')"></a>
						<span><nuxt-link to="/message">消息</nuxt-link></span>
					</li>
					<li>
						<a href="javascript:void(0);"><img src="/games_center/tuichu.png" alt="" @click="$router.push('login')"></a>
						<span><nuxt-link to="/login">退出</nuxt-link></span>
					</li>
					<li>
						<div class="pos_div">
							<input type="text" placeholder="请输入内容" @keydown="start_search">
							<img src="/games_center/search.png" alt="" class="inner_img" @click="$router.push('/grabble')">
						</div>
					</li>
				</ul>
			</div>
    	</div>
    	<div class="top2">
			<div class="container">
				<!-- <div class="top2_left">
					<img src="/games_center/图层 1@2x.png" alt="">
					<span>星移盒子</span>
				</div> -->
				<img class="navimg" src="/games_center/logo.png" alt="" @click="click_logo">
				<div class="game_list">
					<ul>
						<li><nuxt-link to="/games_center">游戏中心</nuxt-link></li>
						<li><nuxt-link to="/download_center">下载中心</nuxt-link></li>
						<li><nuxt-link to="/on_recharge">在线充值</nuxt-link></li>
						<li><nuxt-link to="/about_xingyi/synopsis">关于星移</nuxt-link></li>
						<li><nuxt-link to="/business_work">商务合作</nuxt-link></li>
						<li><nuxt-link to="/contact_us">联系我们</nuxt-link></li>
						<li><nuxt-link to="/join_us">加入星移</nuxt-link></li>
					</ul>
				</div>
			</div>
    	</div>
	</div>
</template>
<style scoped lang="stylus">
@import '~assets/public.styl'
public_placehoder()
top1_h=50px
.top1
	font-size 15px
	height top1_h
	background rgba(248,248,248,1)
	.container
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
				/*&:first-child
					position relative
					.active_box
						position absolute
						width 105%
						left 10px
						border 1px solid rgba(203,203,203,1)
						top 100%
						background #fff
						border-radius 3px
						box-shadow 0px 1px 4px 0px rgba(0, 0, 0, 0.18)
						line-height 20px
						font-size 13px
						padding 7px 0
						text-indent 10px
						div
							&:first-child
								color #FD8F24
							cursor pointer
							height 25px
							line-height 25px
							&:hover
								background lightgray
							public_icon(color,size)
								content ''
								position absolute
								bottom 100%
								left 50%
								transform translateX(-50%)
								width 0
								height 0
								border-width size
								border-style solid
								border-color transparent transparent color transparent
								box-shadow 1px solid red
							&:before
								public_icon(#e1e1e1,7px)
							&:after
								public_icon(#fff,5px)*/
				a
					color #999
					&:hover
						color #FD8F24
				img,a,span
					vertical-align middle
				.pos_div
					width 160px
					position relative
					input
						box-sizing content-box
						font-size 12px
						width 100px
						height 30px
						border-radius 10px
						padding 0 40px 0 20px
						&:hover
							border none
							outline 1px solid #FD8F24
					.inner_img
						width 10px
						position absolute
						right 15px
						top 50%
						transform translateY(-50%)
						cursor pointer
top2_h=80px
.top2
	height top2_h
	background rgba(255,255,255,1)
	border-top 1px solid #e1e1e1
	.container
		container()
		.navimg
			margin-top 12px
			cursor pointer
		/*.top2_left
			float left
			height 40px
			padding 20px 0
			width 20%
			img
				height 40px
				vertical-align middle
			span
				height 30px
				vertical-align middle
				font-size 20px
				font-weight bolder*/
		.game_list
			float right
			height top2_h
			width 80%
			ul
				height top2_h
				float right
				li
					width 100px
					float left
					margin 0 15px
					line-height top2_h
					text-align right
					a
						font-size 19px
						color #888
						/*路由颜色*/
						&.nuxt-link-active
							color #FD8F24
							border-bottom 5px solid #FD8F24
							padding-bottom 25px
</style>
<script>
export default{
	methods:{
		click_logo(){
			this.$router.push('/download_center');
		},
		start_search(e){
			if(e.keyCode==13){
				this.$router.push('/grabble');
			}
		}
	}
}
</script>