<template>
    <div>
    	<div class="container">
    		<div class="login_div">
    			<ul class="login_top">
    				<li><a href="javascript:void(0)" @click="change_logintype(0)" class="active">密码登陆</a></li>
    				<li><a href="javascript:void(0)" @click="change_logintype(1)">短信登陆</a></li>
    			</ul>
    			<div class="login_center">
    				<!-- 密码登陆 -->
    				<div class="login_top_content active">
    					<input class="input_text" type="text" placeholder="手机号/邮箱">
    					<input class="input_text" type="text" placeholder="密码">
    				</div>
    				<!-- 短信登陆 -->
    				<div class="login_top_content">
    					<input class="input_text" type="text" placeholder="手机号">
    					<input class="input_text middle_input" type="text" placeholder="验证码">
    					<button class="middle_button">获取验证码</button>
    				</div>
    				<!-- 登陆验证信息 -->
    				<div class="login_info hide">
    					密码不正确
    				</div>
    				<!-- 登陆按钮 -->
    				<div class="login_button">
    					<button @click="login_checked" class="button_active">登陆</button>
    				</div>
    				<!-- 登陆选择按钮组 -->
    				<div class="login_as">
    					<span class="as_left">
    						<input type="checkbox" class="input_checkbox">
    						<a href="">自动登陆</a>
    					</span>
    					<span class="as_right">
    						<a href="">忘记密码</a>
    						<a>|</a>
    						<nuxt-link to="register">注册</nuxt-link>
    					</span>
    					<div class="clear"></div>
    				</div>
    			</div>
    			<div class="login_bottom">
    				<span class="title">第三方登陆</span>
    				<ul>
    					<li><img src="/login/QQ@2x.png" alt=""></li>
    					<li><img src="/login/微博@2x.png" alt=""></li>
    					<li><img src="/login/支付宝@2x.png" alt=""></li>
    					<li><img src="/login/微信@2x.png" alt=""></li>
    				</ul>
    				<div class="clear"></div>
    			</div>
    		</div>
    		<div class="clear"></div>
    	</div>
    </div>
</template>

<style scoped lang="styl">
@import '~assets/public.styl'
.login_div
	float right
	public_login_container()
	.login_top
		height 55px
		li
			height 100%
			float left
			margin-right 60px
			a
				color #999
				font-size 22px
				&.active
					color #FD8F24
	.login_center
		border-top 1px solid rgb(238,238,238,1)
		border-bottom 1px solid rgb(238,238,238,1)
		padding 30px 0
		.login_top_content
			display none
		.active
			display block
		.login_info
			color #FF4747
			margin-left 10px
		.login_as
			margin 10px 0
			font-size 16px
			input,a
				vertical-align middle
			.as_left
				float left
				a
					margin-left 5px
			.as_right
				float right
				a
					margin-left 10px
					color #999
	.login_bottom
		position relative
		.title
			color #666666
			font-size 20px
			position absolute
			left 50%
			transform translateX(-50%) translateY(-50%)
		ul
			li
				float left
				width 25%
				text-align center
				margin-top 40px
</style>

<script>
export default{
	layout:'login',
	methods:{
		change_logintype(type){
			// 切换登陆模式颜色
			$('.login_top li').eq(type).find('a').addClass('active').parent('li').siblings().find('a').removeClass('active');
			// 切换登陆内容
			$('.login_top_content').eq(type).addClass('active').siblings().removeClass('active');
			// 登陆验证信息初始化(隐藏)
			$('.login_info').addClass('hide');
			// 表单内容初始化(清空)
			$('input').val('');
		},
		login_checked(){
			$('.login_info').removeClass('hide');
		}
	}
}
</script>

