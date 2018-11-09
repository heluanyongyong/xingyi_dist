<template>
	<div class="bgColor ptb3">
		<div class="mg50 bgWhite pd3">
			<table class="w100">
				<tbody>
					<tr class="one">
						<td>充值账号：</td>
						<td><input type="text" name="name" value="星移网络"></td>
					</tr>
					<tr class="two">
						<td>充值游戏：</td>
						<td>						
							<span class="rel">
								<input type="text" name="game" value="泡泡堂"><button><img src="/recharge_img/down.png" @click="isShow=!isShow"></button>
								<img src="/recharge_img/img.png" class="abs" v-show="isShow">
							</span>
							&nbsp;&nbsp;
							<input type="text" name="game" value="泡泡堂"><button><img src="/recharge_img/down.png"></button>
						</td>
					</tr>
					<tr class="three">
						<td>选择金额：</td>
						<td>
							<p>
								<button>10元</button>
								<button>10元</button>
								<button>10元</button>
								<button>10元</button>
								<button>10元</button>
								<button>10元</button>
								<button>10元</button>
							</p>
							<p>
								<button class="bg_yes">10元</button>
								<button>10元</button>
								<button>10元</button>
								<button>10元</button>
								<button>10元</button>
								<button>10元</button>
								<button>10元</button>
							</p>
							<p>
								其他&nbsp;<input type="text" name="num" class="tc line">
							</p>
						</td>
					</tr>
					<tr class="four">
						<td>支付方式：</td>
					    <td class="tabTit">
					    	<button @click="tabChange(0)">微信支付</button>
					    	<button @click="tabChange(1)">支付宝支付</button>
					    	<button @click="tabChange(2)">网银支付</button>
					    </td>
					</tr>
				</tbody>
			</table>
			<ul class="tc tabBd">
				<li>
					<p class="font12 mb10">微信支付<span class="orange">1000.00</span>元</p>
					<p><img src="/recharge_img/ewm.png" class="w10"></p>
				</li>
				<li>
					<p class="font12 mb10">支付宝支付<span class="orange">1000.00</span>元</p>
					<p><img src="/recharge_img/ewm.png" class="w10"></p>
				</li>
				<li class="clearfix">
					<div class="fl ml1">选择银行：</div>
					<div class="five fl ml2">
						<p>
							<span><input type="radio" name=""><img src="/recharge_img/img1.png"></span>
							<span><input type="radio" name=""><img src="/recharge_img/img2.png"></span>
							<span><input type="radio" name=""><img src="/recharge_img/img3.png"></span>
						</p>
						<p>
							<span><input type="radio" name=""><img src="/recharge_img/img4.png"></span>
							<span><input type="radio" name=""><img src="/recharge_img/img5.png"></span>
							<span><input type="radio" name=""><img src="/recharge_img/img6.png"></span>
						</p>
						<p>
							<span><input type="radio" name=""><img src="/recharge_img/img7.png"></span>
							<span><input type="radio" name=""><img src="/recharge_img/img8.png"></span>
							<span><input type="radio" name=""><img src="/recharge_img/img9.png"></span>
						</p>
						<p>
							<span><input type="radio" name=""><img src="/recharge_img/img10.png"></span>
							<span><input type="radio" name=""><img src="/recharge_img/img11.png"></span>
							<span><input type="radio" name=""><img src="/recharge_img/img12.png"></span>
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
  name: 'internetbank',
  data () {
    return {
      isShow: false
    }
  },
  methods:{
      	tabChange(index){
            $('.tabTit>button').eq(index).addClass('bg_yes').siblings().removeClass('bg_yes');
            $(".tabBd>li").hide().eq(index).show();
      	}
  }			
}
</script>

<style scoped>
.rel{
	position: relative;
}
.abs{
	position: absolute;
	top: 30px;
	left: 10px;
}
input,button{
	outline: none;
	border: 1px solid #DBDBDB;
}
 .one input{
 	padding: 1%;
 }
 .two input, .two button{
 	padding: 1%;
 	border: 1px solid #FD8F24;
 }
 .two button{
 	border-left: none;
 	background-color: #FFF0DA;
 }
 .three button{
 	padding: 1% 3%;
 	margin-right: 2%;
 	background-color: #F8F8F8;
 }
 .three p{
 	margin-bottom: 10px;
 }
 .three p:last-child{
 	border: 1px solid #DBDBDB;
 	background-color: #F8F8F8;
 	width: 30%;
 	padding: 5px 0;
 	margin: 0;
 	padding-left: 10px;
 	font-size: 9px;
 }
 .four button{
 	background-color: #fff;
 	padding: 1% 3%;
 	margin-right: 10px;
 }
 .five img{
 	vertical-align: middle;
 	margin: 0 10px;
 	margin-bottom: 10px;
 	width: 20%;
 }
 td{
 	padding: 10px;
 }
 tr{
 	width: 100%;
 }
.bg_yes{
 	background: url(/recharge_img/yes.png) no-repeat right top;
 	border: 1px solid #FD8F24;
 }
 .line{
 	line-height: 26px;
 	/*margin-right: 10px;*/
 }
 .sub{
 	font-size: 10px;
 	background-color: #FD8F24;
 	border: none;
 	color: white;
    text-align: center;
    padding: 1% 10%;
    margin-top: 30px;
    border-radius: 10px;
 }
 .orange{
 	color: #FD8F24;
 	margin-left: 10px;
 }
 .mb10{
 	margin-bottom: 10px;
 }
 .w10{
 	width: 10%;
 }
.ml1{
	margin-left: 8px;
}
.ml2{
	margin-left: 48px;
}
ul{
	margin-top: 20px;
}
ul>li{
  display: none;
}
</style>