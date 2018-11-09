<template>
	<div>
		<div class="loginheader">
			<ul>
				<li><img src="/login/组 10@2x.png" alt=""></li>
				<li class="line"></li>
				<li><span>登陆</span></li>
			</ul>
			<div class="clear"></div>
		</div>
	</div>
</template>
<style scoped lang="styl">
@import '../assets/public.styl'
.loginheader
	container()
	padding 12px 0
	height 80px
	overflow hidden
	ul
		width 100%
		height 100%
		li
			float left
			margin-right 25px
			/*若宽度发生改变、行高也应发生相应改变*/
			line-height 56px
			font-size 22px
			&.line
				height 100%
				width 1px
				background rgba(238,238,238,1)
</style>
<script>
export default{

}
</script>