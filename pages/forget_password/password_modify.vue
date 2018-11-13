<template>
	<div class="bggray">
		<div class="container">
			<div class="title">手机找回密码</div>
			<div class="clear"></div>
			<div class="center">
				<span>新密码：</span><input type="text" class="input_text">
				<span>确认密码：</span><input class="input_text" type="text">
			</div>
			<div class="bottom">
				<model msg="修改星移账号密码成功" class="button_component"></model>
			</div>
		</div>
	</div>
</template>
<style scoped lang="stylus">
@import '~assets/public.styl'
.container
	background #fff
	padding 150px 400px 200px 400px
	text-align center
	.title
		width 80%
		float right
		font-size 28px
	.center
		margin 30px 0 15px 0
		span
			display inline-block
			width 20%
			text-align right
		.input_text
			width 80%
	.bottom
		text-align right
		.button_component
			width 80%
			display inline-block
</style>
<script>
import model from '../../components/dialog/confirm.vue'
export default{
	components:{
		model
	}
}
</script>