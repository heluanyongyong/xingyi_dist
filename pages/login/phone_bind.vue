<template>
	<div class="out_big">
		<div class="container">
			<div class="phonebind_div">
				<div class="phonebind_top">绑定手机号码</div>
				<div class="phonebind_center">
					<input class="input_text" type="text" placeholder="手机号码">
					<input class="input_text middle_input" type="text" placeholder="验证码">
	    			<button class="middle_button">获取验证码</button>
	    			<div class="clear"></div>
				</div>
    			<model msg="恭喜您成功注册星移帐号"></model>
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
.dialog
	padding 80px
	.dialog-content
		img
			float left
			width 50px
		span
			margin-top 5px
			float right
			font-size 24px
	.dialog-bottom
		text-align center
		button
			width 150px
			background #FD8F24
			color #FFFEFE
			border-radius 5px
			height 45px
			margin-top 40px
</style>
<script>
import model from '../../components/dialog/confirm.vue'
export default{
	layout:'login',
	data() {
    	return {
     		register_success_dialog: false
    	};
    },
	methods:{
		register_success(){
			this.register_success_dialog=false;
			setTimeout(()=>{
				this.$router.push('/');
			},1000);
		}
	},
	components:{
		model
	}
}
</script>