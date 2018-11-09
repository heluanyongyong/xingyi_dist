<template>
	<div class="out_big">
		<div class="container">
			<div class="phonebind_div">
				<div class="phonebind_top">绑定手机号码</div>
				<div class="phonebind_center">
					<input class="input_text" type="text">
					<input class="input_text middle_input" type="text" placeholder="验证码">
	    			<button class="middle_button">获取验证码</button>
	    			<div class="clear"></div>
				</div>
    			<button class="button_active">确定</button>
			</div>
		</div>
	</div>
</template>
<style scoped lang="styl">
@import '~assets/public.styl'
.out_big
	padding 150px 0
.phonebind_div
	public_login_container()
	.phonebind_top
		font-size 18px
		border-bottom 1px solid #EEE
		padding-bottom 20px
		bold()
	.phonebind_center
		padding 15px 0 5px 0
</style>
<script>
export default{
	layout:'login'
}
</script>