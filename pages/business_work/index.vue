<template>
	<div>
		<div class="top">
			<div class="container">
				<h2 class="title">商务合作</h2>
				<p>全球授权（客户端/页游端/手游端）<br>全球引进（高质量手游端游戏/知名IP联合开发/其他相关合作业务）</p>
				<p>Tel: +86-755-86958281<br>Email: xuhua@mokylin.com</p>
			</div>
		</div>
		<div class="center">
			<div class="container">
				<h2 class="title">合作伙伴</h2>
				<div class="canvas">
					<img src="/shangwuhezuo/xuebi.png" alt="">
				</div>
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
		container()
		text-align center
		padding 80px 0
		p
			line-height 25px
			&:nth-of-type(1)
				color #333
			&:nth-of-type(2)
				color #010101
				margin-top 30px
				bold()
.center
	background #fff
	.container
		container()
		text-align center
		padding 80px 0
		.canvas
			width 90%
			/*text-align center*/
			margin 0 auto
			img
				width 100%
</style>
<script>
export default{
}
</script>