<template>
	<div class="bggray">
		<div class="container">
			<div class="title">消息管理</div>
			<div class="top">
				<div class="top_left">
					<div>
						<a href="" class="active">全部消息(3)</a>
						<div class="pos"></div>
					</div>
					<div>
						<a href="">系统消息(2)</a>
					</div>
					<div>
						<a href="">服务消息(1)</a>
					</div>
				</div>
				<div class="top_right">
					<label for="select_all"><input type="checkbox" name="" id="select_all"><span>全选</span></label>
					<button class="active">标记已读</button>
					<button class="del">批量删除</button>
				</div>
				<div class="clear"></div>
			</div>
			<div class="center">
				<ul>
					<li class="active">
						<input class="checkbox" type="checkbox" name="" id="">
						<img src="/message/消息管理-默认@2x.png" alt="">
						<span class="type">服务消息</span>
						<span class="info">星移网络科技提醒您充值成功</span>
						<span class="time">11.20</span>
					</li>
					<li v-for="item in 9" :key="item">
						<input class="checkbox" type="checkbox" name="" id="">
						<img src="/message/消息管理-默认@2x.png" alt="">
						<span class="type">服务消息</span>
						<span class="info">星移网络科技提醒您充值成功</span>
						<span class="time">11.20</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<style scoped lang="styl">
@import '~assets/public.styl'
.container
	background #fff
	padding 40px
	.title
		font-size 24px
	.top
		margin-top 20px
		border-bottom 1px solid rgb(189,189,189)
		padding-bottom 15px
		.top_left
			float left
			font-size 18px
			div
				position relative
				margin-right 50px
				display inline-block
				a
					padding 0 20px
					color #999
				.pos
					position absolute
					bottom -16px
					left 0
					width 100%
					height 3px
					background #FD8F24
					&:before
						content ''
						position absolute
						bottom 0
						left 50%
						transform translateX(-50%)
						width 0
						height 0
						border-width 8px
						border-style solid
						border-color transparent transparent #FD8F24 transparent
		.top_right
			float right
			label,input,button,span
				vertical-align middle
			input
				width 15px
				height 15px
				border-radius 3px
			span
				margin-left 3px
			button
				margin-left 15px
				padding 2px 4px
				border-radius 3px
				color #999
				background rgb(248,248,248)
				&.del
					border 1px solid rgb(189,189,189)
	.center
		ul
			padding 5px 0
			li
				border-bottom 1px solid rgb(221,221,221)
				padding  15px
				color #999
				img,input,span
					vertical-align middle
				.checkbox
					width 20px
					height 20px
				img
					margin-left 15px
				.type
					margin-left 10px
				.info
					margin-left 30px
				.time
					float right
			li.active
				.type,.info
					color #333
				.time
					color #666
</style>
<script>
export default{

}
</script>