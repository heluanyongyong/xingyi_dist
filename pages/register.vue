<template>
	<div>
		<div class="container">
			<div class="register_div">
				<div class="register_top">
					<span class="span_left">欢迎注册星移帐号</span>
					<span class="span_right">已有帐号？<nuxt-link to="/" class="active">立即登陆</nuxt-link></span>
				</div>
				<div class="register_content">
					<input class="input_text" type="text" placeholder="请输入帐号">
					<input class="input_text" type="text" placeholder="请输入密码">
					<input class="input_text" type="text" placeholder="再次确认密码">
					<input class="input_text" type="text" placeholder="请输入真实姓名">
					<input class="input_text" type="text" placeholder="请输入身份证号码">
					<div class="check_read">
						<input type="checkbox" class="input_checkbox">
						<span>我已阅读并同意<a href="" class="active">《星移网络使用协议》</a></span>
					</div>
					<button  class="button_active" @click="check_register">注册</button>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="styl">
@import '~assets/public.styl'
.register_div
	public_login_container()
	.register_top
		border-bottom 1px solid rgb(238,238,238)
		padding-bottom 20px
		.span_left
			color #666
			font-size 18px
			bold()
		.span_right
			color #999
			float right
			padding-top 4px
	.register_content
		padding 25px 0 0 0
		.check_read
			margin 10px 0
			input,span
				vertical-align middle
			span
				margin-left 5px
</style>
<script>
export default{
	layout:'login',
	methods:{
		check_register(){
			this.$router.push('/phone_bind');
		}
	}
}
</script>