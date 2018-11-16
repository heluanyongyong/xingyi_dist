<template>
	<div>
		<el-button class="button_active" type="text" @click="modal_change = true">{{name}}</el-button>
		<el-dialog
			:visible.sync="modal_change"
			width="500px"
			:show-close="false"
			:close-on-click-modal="false"
			>
			<div class="dialog">
				<div class="dialog-content">
					<img src="/login/pass.png" alt=""><span>{{msg}}</span>
				</div>
				<div class="clear"></div>
				<div class="dialog-bottom">
					<button @click="click_success">{{btn}}</button>
				</div>
			</div>
		</el-dialog>
	</div>
</template>
<style scoped lang="styl">
@import '~assets/public.styl'
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
				this.$router.push('/login');
			},1000);
    	}
    },
    props:['msg','btn','name']
}
</script>