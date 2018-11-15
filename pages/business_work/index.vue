<template>
	<div>
		<div class="top">
			<div class="container">
				<h2 class="title">合作伙伴</h2>
				<div class="canvas">
					<img src="/shangwuhezuo/xuebi.png" alt="">
				</div>
			</div>
		</div>
		<div class="center">
			<div class="container">
				<h2 class="title">商务合作</h2>
				<div class="left">
					<p class="p1">星移信息</p>
					<p>全球授权（客户端/页游端/手游端）</p>
					<p>全球引进（高质量手游端游戏/知名IP联合开发/其他相关合作业务）</p>
					<p>Tel: +86-755-86958281</p>
					<p>Email: xuhua@mokylin.com</p>
				</div>
				<div class="right">
					<p class="p1">星移信息</p>
					<p class="d1">公司名称<input type="text"></p>
					<div>
						<p class="d1 d2_l">您的姓名<input type="text"></p>
						<p class="d1 d2_r">您的电话<input type="text"></p>
					</div>
					<div class="clear"></div>
					<p class="d1 d3">请输入留言<input type="text"></p>
					<div class="button"><button>提交</button></div>
				</div>
				<div class="clear"></div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="stylus">
@import '~assets/public.styl'
.title
	font-size 28px
	bold()
	letter-spacing 1px
	margin-bottom 40px
.top
	background rgba(248,248,248,1)
	.container
		text-align center
		padding 80px 0
		.canvas
			width 100%
			/*text-align center*/
			margin 0 auto
			img
				width 100%
.center
	background #fff
	.container
		text-align center
		padding 40px 0 80px 0
		p
			input
				margin-left 20px
		.p1
			font-size 24px
			margin-bottom 15px
		.left
			float left
			text-align left
			margin-top 100px
			color #666
			p
				line-height 28px
		.right
			float right
			padding 30px 50px
			width 570px
			border 1px solid rgb(238,238,238)
			text-align left
			color #666
			public_inputWidth(size)
				input
					width size
			.d1
				border-bottom 1px solid rgb(208,208,208)
				padding-bottom 10px
				margin-bottom 20px
				public_inputWidth(336px)
			.d2_l
				width 42%
				float left
				public_inputWidth(100px)
			.d2_r
				width 42%
				float right
				public_inputWidth(100px)
			.d3
				public_inputWidth(350px)
			.button
				text-align center
				margin 35px 0 10px 0
				button
					background transparent
					border 1px solid rgb(217,217,217)
					width 175px
					height 50px
					font-size 18px
					&:hover
						background #FD8F24
						color #fff
</style>
<script>
export default{
}
</script>