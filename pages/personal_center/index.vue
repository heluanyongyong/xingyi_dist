<template>
	<div class="bgColor clearfix ptb3">
		<div class="container bgWhite clearfix">
			<div class="fl div_left">
				<h1>个人中心</h1>
				<ul class="ul_left">
					<li @click="listChange(0)" class="active">我的账号</li>
					<li @click="listChange(1)">修改密码</li>
				</ul>
			</div>
			<div class="fl div_right clearfix">
				<ul class="ul_right">
					<!-- 我的账号 -->
					<li class="list1">
						<dl class="clearfix">
							<dd><img src="/personal_img/header.png"></dd>
							<dd>
								<p><em>账号：</em><span>星移盒子</span></p>
								<p><em>真实姓名：</em><span>星移盒子</span></p>
							</dd>
						    <dd>
						    	<p><em>手机号码：</em><span>星移盒子</span></p>
								<p><em>身份证号码：</em><span>星移盒子</span></p>
						    </dd>
						</dl>
						<p class="p font20">账号安全保护</p>
						<ol class="clearfix">
							<li><img src="/personal_img/name.png"></li>
							<li>
								<p class="font24">实名认证</p>
								<p class="font16 gray">根据国家有关规定，您在进入游戏时需要进行实名及防沉迷验证</p>
							</li>
							<li><p @click="isShow=!isShow">设置</p></li>
						</ol>
						<ol class="clearfix">
							<li><img src="/personal_img/phone.png"></li>
							<li>
								<p class="font24">安全手机</p>
								<p class="font16 gray">手机是保护账号安全最重要的手段，请不要泄露您的手机号和手机验证码。</p>
							</li>
							<li><p @click="show=!show">设置</p></li>
						</ol>
						<ol class="clearfix">
							<li><img src="/personal_img/sub.png"></li>
							<li>
								<p class="font24">密码设置</p>
								<p class="font16 gray">密码设置 修改原密码，找回密码等功能在此。</p>
							</li>
							<li><p @click="listChange(1)">设置</p></li>
						</ol>
					</li>
					<!-- 修改密码 -->
					<li class="tc list2 none">
						<p class="font36 black mb49">星移盒子</p>
						<div class="tr w462">
							<p><span>原密码</span><input type="text" name=""></p>
							<p><span>新密码</span><input type="text" name=""></p>
							<p><span>确认密码</span><input type="text" name=""></p>
							<p class="mt45"><input type="submit" name="" value="确认" class="bgOrange white"></p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!-- 实名认证 -->
		<div v-show="isShow">
		    <div class="modal" @click="isShow=!isShow"></div>
			<div class="modal_box tl">
				<p class="font24 grey">实名认证</p>
				<p><input type="text" name="" placeholder="真实姓名"></p>
				<p><input type="text" name="" placeholder="身份证号码"></p>
				<p><button class="active1" @click="isShow=!isShow">确定</button></p>
			</div>
		</div>   
		<!-- 安全手机设置原号码-->
		<div v-show="show">
		    <div class="modal" @click="show=!show"></div>
			<div class="modal_box tl">
				<p class="font24 grey">安全手机设置</p>
				<p><input type="text" name="" placeholder="真实姓名"></p>
				<p><input type="text" name="" placeholder="身份证号码" id="num"><input type="button" name="" value="获取验证码" id="but"></p>
				<p><button class="active1" @click="ifshow()">下一步</button></p>
			</div>
		</div>
		<!-- 安全手机设置新号码-->
		<div v-show="fShow">
		    <div class="modal" @click="fShow=!fShow"></div>
			<div class="modal_box tl">
				<p class="font24 grey">安全手机设置</p>
				<p><input type="text" name="" placeholder="真实姓名"></p>
				<p><input type="text" name="" placeholder="身份证号码" id="num"><input type="button" name="" value="获取验证码" id="but"></p>
				<p><button class="active1" @click="fShow=!fShow">确定</button></p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'personal',
  data () {
    return {
      isShow: false,
      show:false,
      fShow:false,
      no:false
    }
  },
    methods:{
		listChange(index){
	      $('.ul_left>li').eq(index).addClass('active').siblings().removeClass('active');
	      $(".ul_right>li").hide().eq(index).show();
		},
		ifshow(){
           this.show=false
           this.fShow=true
		}
    }
}
</script>

<style scoped>
/*模态框*/
.modal_box input{
	padding-left: 10px;
}
.modal_box p:nth-child(3){
	margin: 17px 0 31px 0;
}
.modal_box p:nth-child(1){
	margin-bottom: 57px;
}
#num{
   width: 255px;
}
#but{
	width: 145px;
	height: 51px;
	background-color: white;
	color: #FD8F24;
	border-left: none;
	padding-left: 0;
}
/*左边列表样式*/
h1{
	padding: 55px 0 30px  42px;
}
.div_left{
	width: 258px;
	height: 764px;
}
.div_right{
	width: 818px;
	border-left: 1px solid #DDDDDD;
	padding: 89px 43px 0 80px;
}
.ul_left li{
	width: 258px;
	height: 73px;
	line-height: 73px;
	color: #666666;
	text-align: center;
	font-size: 22px;
}
.ul_left li:hover{
	color: white;
	background-color: #FD8F24;
}
.ul_left .active{
	color: white;
	background-color: #FD8F24;
}
.active1{
	color: white;
	background-color: #FD8F24;
}
/*修改密码样式*/
span{
	font-size: 16px;
	text-align: right;
	margin-right: 13px;
}
input,button{
	width: 398px;
	height: 50px;
	line-height: 50px;
	border: 1px solid #D6D6D6;
}
p{
	margin-bottom: 17px;
}
.w462{
	width: 510px;
}
.list2{
	height: 764px;
}
.mb49{
	margin-bottom: 49px;
}
.mt45{
	margin-top: 44px;
}
/*我的账号样式*/
.list1{
  width: 818px;
}
dd{
	float: left;
	margin-right: 45px;
}
dd p{
	margin-top: 30px;
}
em{
	font-size: 20px;
	color: #999;
}
span{
	font-size: 24px;
}
.p{
	background-color: #EFEFEF;
	line-height: 60px;
	padding-left: 26px;
	margin: 44px 0;
}
ol li{
	float: left;
	margin-bottom: 72px;
}
ol li:nth-child(2){
	margin: 20px 0 0 23px;
}
ol li:last-child{
	width: 100px;
	height: 40px;
	line-height: 40px;
	color: white;
	background-color: #FD8F24;
	font-size: 18px;
	text-align: center;
	float: right;
	margin-top: 40px;
}
</style>