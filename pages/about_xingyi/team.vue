<template>
	<div class="bgColor">
		<about></about>
		<div class="bgColor mg50 target">
			<ul class="tl">
				<li class="clearfix">
					<img src="/about_img/wyw.png" class="fl" alt="图片加载中..">
					<div class="fr tl">
						<p class="font16">王廷伟</p>
						<p class="font12 p">公司创始人兼CEO</p>
						<p class="font9 grey p">负责公司的全面管理和战略统筹，2014年率先创建伊步科技，历经3年发展至今，一直保持快速发展并持续盈利至今。职业经历:1974年10月出生；1995-2014就职于摩托罗拉（中国）电子有限公司上海分公司；2014-至今创立伊步科技公司，持有公司90%股</p>
					</div>					
				</li>
				<li class="clearfix">
					<div class="fl">
						<p class="font16">许锡栾<span>副总监</span></p>
						<p class="font9 grey p">从事多年移动广告技术开发与应用，另有丰富的手机游戏研发技术与经验积累；国内最早从事研发与运用H5网页技术； 曾运用H5技术参与搭建深圳移动无线城市系统，用户量达千万级、日活跃用户百万级；曾负责中国移动、中国联通多个省市的技术支撑；现为伊步科技核心技术团队负责人之一，为公司各项业务技术提供有力支撑。</p>
					</div>
					<img src="/about_img/xxl.png" class="fr" alt="图片加载中..">					
				</li>
				<li class="clearfix">
					<div class="fl">
						<p class="font16">吴 斌<span>市场总监</span></p>
						<p class="font9 grey p">拥有广电系统的对接政府部门宣传，主持的经历，并以此得过省内各奖项； 通过奈瑞儿塑身美颜的市场营销工作经历对IPO上市有着深刻理解，并成为瑞典ITRIM大中华区项目负责人；◆ 拥有丰富的团队带领经验，目前负责为伊步搭建一个高效、完整的业务团</p>
					</div>
					<img src="/about_img/wb.png" class="fr" alt="图片加载中..">			
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import about from '../../components/about.vue'
export default {
  name: 'team',
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
.target{
	padding:3rem 0;
}
.pd2{
	padding: 2rem;
}
.p{
	margin-top: 1rem;
}
li>div{
	width: 60%;
}
li>img{
	width: 20%;
}
li{
	background-color: white;
	padding: 3rem;
	border-bottom:1px solid #E0E0E0;
}
li:last-child{
    border-bottom: none;
}
span{
	margin-left: 2%;
	font-size: 12px;
}

</style>