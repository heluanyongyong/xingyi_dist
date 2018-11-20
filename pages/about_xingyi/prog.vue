<template>
	<div class="flex2 clearfix bgColor box">
		<about></about>
		<div class="container clearfix ptb3">
			<ul class="grey font36 ul_left wrBorder1 clearfix fl">
				<li>2017-1</li>
				<!-- <li>2018-2</li>
				<li>2017-7</li>
				<li>2017-2</li>
				<li>2016-7</li> -->
			</ul>
			<ul class="ul_right tl fr">
				<li class="clearfix">
					<div>
						<div>深圳星移网络科技有限公司成立</div>
						<p>2017年1月6日，深圳星移网络科技有限公司正式成立</p>
					</div>
					<img src="/about_img/logo.png" alt="图片加载中.." class="mid">
				</li>
				<!-- <li class="clearfix">
					<div>
						<div>2018年年会</div>
						<p>大步跨过了2017年，我们用汗水耕耘，去描绘伊步更好的未来</p>
					</div>
					<img src="/about_img/two.png" alt="图片加载中..">
				</li>
				<li class="clearfix">
					<div>
						<div>伊步三周年庆</div>
						<p>这一路辛勤汗水浇灌成功的幼苗，智慧的力量引来蜂蝶飞舞，齐心协力共同奋斗，迎接伊步三周年庆典</p>
					</div>
					<img src="/about_img/three.png" alt="图片加载中..">
				</li>
				<li class="clearfix">
					<div>
						<div>2017年年会</div>
						<p>伴随着欢乐的乐曲，伊步迎接2017年的年会</p>
					</div>
					<img src="/about_img/four.png" alt="图片加载中..">
				</li>
				<li class="clearfix">
					<div>
						<div>伊步两周年庆</div>
						<p>走过了收获的秋天，寒冷的冬天，希望的春天，我们迎来了充满期待的夏天，我们满情壮志的迎来了公司二周年庆典</p>
					</div>
					<img src="/about_img/five.png" alt="图片加载中..">
				</li> -->
			</ul>
		</div>
	</div>
</template>

<script>
import about from '../../components/about.vue'
export default {
  name: 'prog',
  head(){
		return{
			title:'发展历程'
		}
	},
  data () {
    return {
      
    }
  },
  components:{
  	about
  }
}
</script>

<style scoped>
.ul_left li{
    border-bottom: 1px solid #E0E0E0;
    text-align: center;
    width: 170px;
    margin: 20px 30px 20px 0;
    padding: 70px 0;
}
.ul_right{
	width: 886px;
	height: 173px;
}
.ul_right li{
    background-color: white;
    margin-bottom: 50px;
    padding: 20px;
}
.ul_right div{
	float: left;
	width: 538px;
}
.ul_right img{
	float: right;
	width: 183px;

}
.ul_right p{
	font-size: 18px;
	margin-top: 30px;
	color: #999999;
}
.mg3{
	margin-top: 3rem;
}
.ul_right div{
	font-size: 32px;
	margin-bottom: 30px;
}
</style>