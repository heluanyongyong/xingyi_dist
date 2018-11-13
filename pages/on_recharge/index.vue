<template>
	<div class="bgColor ptb3">
		<div class="bgWhite ptb3 container">
			<table class="w100 margin">
				<tbody>
					<tr class="one">
						<td>充值账号：</td>
						<td><input type="text" name="name" value="星移"><span>更改帐号</span></td>
					</tr>
					<tr class="two">
						<td>充值游戏：</td>
						<td>						
							<span class="rel">
								<input type="text" name="game" value="泡泡堂"><button @click="isShow=!isShow"><img src="/recharge_img/down.png"></button>
								<img src="/recharge_img/img.png" class="abs" v-show="isShow">
							</span>
							&nbsp;&nbsp;
							<input type="text" name="game" value="风云 3区"><button><img src="/recharge_img/down.png"></button>
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
							<p class="other">
								<span class="font18">其他</span>&nbsp;<input type="text" name="num" class="tc">
							</p>
						</td>
					</tr>
					<tr class="four">
						<td>支付方式：</td>
					    <td class="tabTit">
					    	<button @click="tabChange(0)" class="bg_yes">微信支付</button>
					    	<button @click="tabChange(1)">支付宝支付</button>
					    	<button @click="tabChange(2)">网银支付</button>
					    </td>
					</tr>
				</tbody>
			</table>
			<ul class="tc tabBd">
				<!-- 微信支付 -->
				<li class="block">
					<p class="font12 mb10">微信支付<span class="orange">1000.00</span>元</p>
					<p><img src="/recharge_img/ewm.png"></p>
				</li>
				<!-- 支付宝支付 -->
				<li>
					<p class="font12 mb10">支付宝支付<span class="orange">1000.00</span>元</p>
					<p><img src="/recharge_img/ewm.png"></p>
				</li>
				<!-- 网银支付 -->
				<li class="clearfix">
					<div class="fl ml1 font18">选择银行：</div>
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
					<div><button id="but">立即充值</button></div>
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
.margin{
	margin: 0 73px;
}
td,button,input{
	font-size: 18px;
}
li>p{
	font-size: 24px;
}
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
	height: 50px;
	line-height: 48px;	
}
button{
	padding: -1px 10px;
}
input{
	padding: 0 10px;
}
.one span{
	font-size: 22px;
	color: #FD8F24;
	margin-left: 22px;
}
 .two input, .two button{
 	border: 1px solid #FD8F24;
 }
 .two button{
 	border-left: none;
 	background-color: #FFF0DA;
 }
 .other{
 	width: 370px;
 }
 .other input{
 	width: 287px;
 	height: 38px;
 	line-height: 38px;
 	margin-left: 10px;
 }
 .three button{
 	background-color: #F8F8F8;
 	width: 93px;
 	margin-right: 15px;
 }
 .three p{
 	margin-bottom: 10px;
 }
 .three p:last-child{
 	border: 1px solid #DBDBDB;
 	background-color: #F8F8F8;
 	padding: 5px 0;
 	margin: 0;
 	padding-left: 10px;
 	font-size: 9px;
 }
 .four button{
 	background-color: #fff;
 	margin-right: 20px;
 	padding: 0 24px;
 }
 .five img{
 	vertical-align: middle;
 	margin: 0 26px 17px 10px;
 }
 .five input{
 	vertical-align: middle;
 	width: 18px;
 	height: 18px;
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
 	background-color: #F8F8F8;
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
.ml1{
	margin-left: 82px;
}
.ml2{
	margin-left: 52px;
}
ul{
	margin-top: 20px;
}
ul>li{
  display: none;
}
#but{
	width:300px;
	height:60px;
	background:rgba(253,143,36,1);
	border-radius:6px;
	color: white;
	margin-top: 85px;
}
</style>