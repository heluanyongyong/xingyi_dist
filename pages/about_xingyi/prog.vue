<template>
	<div class="flex2 clearfix bgColor box">
		<about></about>
		<ul class="grey font18 div1 tr ul_left wrBorder1 clearfix fl mg3">
			<li>2018-5</li>
			<li>2018-2</li>
			<li>2017-7</li>
			<li>2017-2</li>
			<li>2016-7</li>
		</ul>
		<ul class="ul_right tl fr pt3">
			<li class="clearfix">
				<div>
					<h3>伊步慈善，一个有爱的健康倡导者</h3>
					<p>5月22日，广东伊步网络科技有限公司与深圳市慈善会成立的深圳市慈善会伊步慈善基金正式挂牌运营了</p>
				</div>
				<img src="/about_img/one.png" alt="图片加载中..">
			</li>
			<li class="clearfix">
				<div>
					<h3>2018年年会</h3>
					<p>大步跨过了2017年，我们用汗水耕耘，去描绘伊步更好的未来</p>
				</div>
				<img src="/about_img/two.png" alt="图片加载中..">
			</li>
			<li class="clearfix">
				<div>
					<h3>伊步三周年庆</h3>
					<p>这一路辛勤汗水浇灌成功的幼苗，智慧的力量引来蜂蝶飞舞，齐心协力共同奋斗，迎接伊步三周年庆典</p>
				</div>
				<img src="/about_img/three.png" alt="图片加载中..">
			</li>
			<li class="clearfix">
				<div>
					<h3>2017年年会</h3>
					<p>伴随着欢乐的乐曲，伊步迎接2017年的年会</p>
				</div>
				<img src="/about_img/four.png" alt="图片加载中..">
			</li>
			<li class="clearfix">
				<div>
					<h3>伊步两周年庆</h3>
					<p>走过了收获的秋天，寒冷的冬天，希望的春天，我们迎来了充满期待的夏天，我们满情壮志的迎来了公司二周年庆典</p>
				</div>
				<img src="/about_img/five.png" alt="图片加载中..">
			</li>
		</ul>
	</div>
</template>

<script>
import about from '../../components/about.vue'
export default {
  name: 'prog',
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
.ul_right{
	width: 70%;
}
.ul_left{
	width: 30%;
}
.ul_left li{
    border-bottom: 1px solid #E0E0E0;
    width: 30%;
    padding: 10% 5%;
    margin: 3% 0 3% 65%;
    text-align: center;
}
.ul_right li{
	width: 60%;
    background-color: white;
    margin-bottom: 1rem;
    padding: 1rem;
}
.ul_right div{
	width: 57%;
	float: left;
}
.ul_right img{
	float: right;
	width: 20%;
}
.ul_right p{
	margin-top: 1rem;
	font-size: 0.9rem;
	color: #999999;
}
.mg3{
	margin-top: 3rem;
}
</style>