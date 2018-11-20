<template>
	<div class="bgColor ptb3">
		<div class="bgWhite ptb3 container">
			<!-- 头部导航 -->
			<div class="clearfix head_box">
				<ul class="head_ul clearfix fl tc">
					<li @click="headChange(0)" class="clickColor">
						充值到游戏
                        <div class="arrow-down b"></div>
					</li>
					<li @click="headChange(1)">
						充值到星币
                       <div class="arrow-down"></div>
					</li>
					<li @click="headChange(2)">
					   星币充值到游戏
					   <div class="arrow-down"></div>
					</li>
				</ul>
				<div class="fr font18"><nuxt-link to="/on_recharge/record" tag="span">
					充值记录>>
				</nuxt-link></div>
			</div>
			<div class="recharge_box">
				<!-- 充值到游戏 -->
				<div>
					<table class="w100 margin">
						<tbody>
							<tr class="one">
								<td>充值账号：</td>
								<td>
                                    <input type="text" value="星移" disabled class="read" required="required"><span @click="remove()">更改帐号</span>
								</td>
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
										<span @click="chooseMoney(0)">10</span>
										<span @click="chooseMoney(1)">20</span>
										<span @click="chooseMoney(2)">30</span>
										<span @click="chooseMoney(3)">50</span>
										<span @click="chooseMoney(4)">100</span>
										<span @click="chooseMoney(5)">200</span>
										<span @click="chooseMoney(6)">300</span><br>
									<!-- </p>
									<p> -->
										<span class="bg_yes" @click="chooseMoney(7)">500</span>
										<span @click="chooseMoney(8)">1000</span>
										<span @click="chooseMoney(9)">2000</span>
										<span @click="chooseMoney(10)">3000</span>
										<span @click="chooseMoney(11)">5000</span>
										<span @click="chooseMoney(12)">1000</span>
										<span @click="chooseMoney(13)">2000</span>
									</p>
									<p class="other">
										<em class="font18">其他</em>&nbsp;<input type="text" name="num" class="tc inputText" @click="inputText()">
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
						<li>
							<p class="font12 mb10">微信支付:<span class="orange">0</span>元</p>
							<p><img src="/recharge_img/phone.png" class="imgA"></p>
						</li>
						<!-- 支付宝支付 -->
						<li class="none">
							<p class="font12 mb10">支付宝支付<span class="orange">0</span>元</p>
							<p><img src="/recharge_img/ewm.png"></p>
						</li>
						<!-- 网银支付 -->
						<li class="clearfix none">
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
				<!-- 充值到星币 -->
				<div class="none">
					<table class="w100 margin">
						<tbody>
							<tr class="one">
								<td>我的星币：</td>
								<td><span>100</span></td>
							</tr>
							<tr class="three">
								<td>选择金额：</td>
								<td>
									<p>
										<span @click="chooseMoney(14)">10元</span>
										<span @click="chooseMoney(15)">20元</span>
										<span @click="chooseMoney(16)">30元</span>
										<span @click="chooseMoney(17)">50元</span>
										<span @click="chooseMoney(18)">100元</span>
										<span @click="chooseMoney(19)">200元</span>
										<span @click="chooseMoney(20)">300元</span><br>
										<span class="bg_yes" @click="chooseMoney(21)">500元</span>
										<span @click="chooseMoney(22)">1000元</span>
										<span @click="chooseMoney(23)">2000元</span>
										<span @click="chooseMoney(24)">3000元</span>
										<span @click="chooseMoney(25)">5000元</span>
										<span @click="chooseMoney(26)">1000元</span>
										<span @click="chooseMoney(27)">2000元</span>
									</p>
									<p class="other">
										<em class="font18">其他</em>&nbsp;<input type="text" name="num" class="tc inputText" @click="inputText()">
									</p>
								</td>
							</tr>
							<tr>
								<td>星币说明：</td>
								<td><span>星币比例1:1，例如充值100元得100星币；</span></td>
							</tr>
							<tr class="four">
								<td>支付方式：</td>
							    <td class="tabTit">
							    	<button @click="tabChange(3)" class="bg_yes">微信支付</button>
							    	<button @click="tabChange(4)">支付宝支付</button>
							    	<button @click="tabChange(5)">网银支付</button>
							    </td>
							</tr>
						</tbody>
					</table>
					<ul class="tc tabBd">
						<!-- 微信支付 -->
						<li>
							<p class="font12 mb10">微信支付:<span class="orange">0</span>元</p>
							<p><img src="/recharge_img/phone.png"></p>
						</li>
						<!-- 支付宝支付 -->
						<li class="none">
							<p class="font12 mb10">支付宝支付<span class="orange">1000.00</span>元</p>
							<p><img src="/recharge_img/ewm.png"></p>
						</li>
						<!-- 网银支付 -->
						<li class="clearfix none">
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
				<!-- 星币充值到游戏 -->
				<div class="none">
					<table class="w100 margin">
						<tbody>
							<tr class="one">
								<td>充值账号：</td>
								<td><input type="text" name="name" value="星移"><span class="none">更改帐号</span>
									<span>我的星币：</span>
									<span>10000</span>
								</td>
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
								<td>选择星币：</td>
								<td>
									<p>
										<span @click="chooseMoney(28)">10</span>
										<span @click="chooseMoney(29)">20</span>
										<span @click="chooseMoney(30)">30</span>
										<span @click="chooseMoney(31)">50</span>
										<span @click="chooseMoney(32)">100</span>
										<span @click="chooseMoney(33)">200</span>
										<span @click="chooseMoney(34)">300</span><br>
										<span class="bg_yes" @click="chooseMoney(35)">500</span>
										<span @click="chooseMoney(36)">1000</span>
										<span @click="chooseMoney(37)">2000</span>
										<span @click="chooseMoney(38)">3000</span>
										<span @click="chooseMoney(39)">5000</span>
										<span @click="chooseMoney(40)">1000</span>
										<span @click="chooseMoney(41)">2000</span>
									</p>
									<p class="other">
										<em class="font18">其他</em>&nbsp;<input type="text" name="num" class="tc inputText" @click="inputText()">
									</p>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="tc"><button id="but">立即充值</button></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'internetbank',
  head(){
		return{
			title:'在线充值'
		}
	},
  data () {
    return {
      isShow: false
    }
  },
  methods:{
      	// 头部导航切换
        headChange(index){
        	$('.head_ul>li').eq(index).addClass('clickColor').siblings().removeClass('clickColor');
        	$(".head_ul>li").children('div').hide().eq(index).show();
        	$(".recharge_box>div").hide().eq(index).show();
        },
        // 额度选择状态
        chooseMoney(index){
        	// 点击当前额度添加被选状态的类
        	$('.three>td').children('p').children('span').eq(index).addClass('bg_yes').siblings().removeClass('bg_yes');
        	$('.other').css("border","none")
        	// 获取被选择的支付额度
        	$(".orange").text($('.three>td').children('p').children('span').eq(index).text())
        	// 以支付额度判断当前该显示的图片
        	if ($(".orange").text()===0) {
        		// 额度为0时显示手机图片
        		$(".imgA").attr("src","/recharge_img/phone.png")
        	}else{
        		// 否则显示对应的支付二维码
        		$(".imgA").attr("src","/recharge_img/ewm.png")
        	}
        },
        // 其他金额输入框被点击时
        inputText(){
            $('.three>td').children('p').children('span').removeClass('bg_yes');
            $('.other').css("border","1px solid #FD8F24")
        },
        // 支付方式切换
      	tabChange(index){
            $('.tabTit>button').eq(index).addClass('bg_yes').siblings().removeClass('bg_yes');
            $(".tabBd>li").hide().eq(index).show();
      	},
      	// 点击span移除输入框的禁用属性并隐藏span标签
      	remove(){
      		$(".read").removeAttr("disabled").focus().val("").siblings().css("color","#999");
      	}
      	// 
      	// on(){
      	// 	if ($(".read").val("")!==undefined) {	
      	// 	  $(".read").removeAttr("disabled").siblings().text("请完善账号").css("color","#FD8F24");
      	// 	  console.log($(".read").siblings().text())
      	// 	}
      	// 	else{
      	// 	  $(".read").attr("disabled","disabled").siblings().css("color","#999");
      	// 	  console.log(111)
      	// 	}
      	// }
  }			
}
</script>

<style scoped>
.head_ul .b{
	display: block;
}
/*向下箭头*/
.arrow-down{
	width:0;
	height:0;
	border-left:10px solid transparent;
	border-right:10px solid transparent;
	border-top:10px solid #FD8F24;
}
/*头部导航*/
.head_box{
	line-height: 82px;
    padding-right: 45px;
    margin-bottom: 64px;
    border-bottom: 1px solid #E7E7E7;
}
.head_ul li{
     float: left;
     width: 260px;
     height: 82px;
     line-height: 82px;
     font-size: 26px;
     color: #999;
     border-left: 1px solid white;
     position: relative; 
}
.head_ul li:hover{
	background-color: #FD8F24;
	color: white;
}
.head_ul .clickColor{
	background-color: #FD8F24;
	color: white;
}
.head_ul div{
	display: none;
	position: absolute;
    left: 125px;
}
/*充值详情*/
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
 .other input{
 	width: 287px;
 	height: 38px;
 	line-height: 38px;
 	margin-left: 10px;
 }
 .three span{
 	background-color: #F8F8F8;
 	width: 113px;
 	height: 48px;
 	line-height: 48px;
 	display: inline-block;
 	text-align: center;
 	margin-right: 15px;
 	overflow: hidden;
 	border: 1px solid #DBDBDB
 }
 .three span:hover,.tabTit button:hover{
 	background: url(/recharge_img/yes.png) no-repeat right -1px top;
 	border: 1px solid #FD8F24;
 	background-color: #F8F8F8;
 }
 .three p{
 	margin-bottom: 10px;
 }
 .three p:last-child{
 	width: 368px;
 	border: 1px solid #DBDBDB;
 	background-color: #F8F8F8;
 	padding: 5px 0;
 	margin: 0;
 	padding-left: 10px;
 	font-size: 9px;
 	height: 52px;
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
table .bg_yes{
 	background: url(/recharge_img/yes.png) no-repeat right -1px top;
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
	margin-left: 35px;
}
.tabBd{
	margin-top: 20px;
}
#but{
	width:300px;
	height:60px;
	background:rgba(253,143,36,1);
	border-radius:6px;
	color: white;
	margin-top: 85px;
}
/*.tabTit button:hover{
	background: url(/recharge_img/yes.png) no-repeat right -1px top;
 	border: 1px solid #FD8F24;
}*/
</style>