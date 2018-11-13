<template>
	<div>
		<el-button class="button_active" type="text" @click="modal_change = true">确定</el-button>
		<el-dialog
			:visible.sync="modal_change"
			width="500px"
			:show-close="false"
			:close-on-click-modal="false"
			>
			<div class="dialog">
				<div class="dialog-content">
					<img src="/login/通过 (1)@2x.png" alt=""><span>{{msg}}</span>
				</div>
				<div class="clear"></div>
				<div class="dialog-bottom">
					<button @click="click_success">我知道了</button>
				</div>
			</div>
		</el-dialog>
	</div>
</template>
<style scoped lang="styl">
@import '~assets/public.styl'
.dialog
	padding 80px
	.dialog-content
		text-align center
		img,span
			vertical-align middle
		img
			width 50px
		span
			margin-left 20px
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
export default{
	data() {
    	return {
     		modal_change: false
    	};
    },
    methods:{
    	click_success(){
    		this.modal_change=false;
			setTimeout(()=>{
				this.$router.push('/');
			},1000);
    	}
    },
    props:['msg']
}
</script>