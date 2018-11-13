<template>
	<div class="bgColor">
		<about></about>
		<ul class="tl container ptb3 clearfix">
			<li class="clearfix">
				<nuxt-link to="/about_xingyi/honor_details" tag="span">
					<div class="fl">
						<div>2016-06</div>
						<p>荣誉证书</p>
						<div>我们一步一脚印，坚持稳中求进；不断创新，不断发展</div>
					</div>
					<img src="/about_img/zc2@2x.png" alt="图片加载中..">
				</nuxt-link>
			</li>
			<li class="clearfix">
				<div class="fl">
					<div>2016-06</div>
					<p>荣誉证书</p>
					<div>我们一步一脚印，坚持稳中求进；不断创新，不断发展</div>
				</div>
				<img src="/about_img/zc2@2x.png" alt="图片加载中..">
			</li>
			<li class="clearfix">
				<div class="fl">
					<div>2016-06</div>
					<p>荣誉证书</p>
					<div>我们一步一脚印，坚持稳中求进；不断创新，不断发展</div>
				</div>
				<img src="/about_img/zc2@2x.png" alt="图片加载中..">
			</li>
		</ul>
		<!-- 荣誉详情 -->
		<!-- <div class="details_box tc container ptb3">
			<h3>星移荣誉</h3>
			<div class="font16 grey">由星移网络发布于：2018-05-16 作者：星移</div>
			<p>5月22日，深圳星移网络科技有限公司与深圳市慈善会成立的深圳市慈善会伊步慈善基金正式挂牌运营了。星移总经理王廷伟、星移广告
			部总监冯强、星移慈善基金副主任张敬伟、星移总经理助理洪惠琴、星移技术总监许锡栾、星移市场总监吴斌、深圳市慈善会副秘书长董昕、
			深圳市慈善会项目合作部总监庞玮、深圳市慈善会筹资合作部高级官员罗婉莹参与了本次授匾仪式。</p>
			<div><img src="/about_img/details.png"></div>
			<p>深圳市慈善会是在深圳市委、市政府高度重视和支持下，具有国家公募资质和法人资格的公益性、非营利性社会组织。以发扬人道主义
            精神，安老扶幼、助学助医、助残济困等多方面慈善救助，促进深圳公益慈善事业与和谐社会建设为宗旨。</p>
            <p>星移总经理王廷伟向深圳市慈善会一行阐述了伊步共享的创立初衷以及对于慈善的方向和实施方案。</p>
            <p>作为星移大家长，一直以来，伊步总经理王廷伟都非常关注慈善事业，经常参加慈善捐款以及慈善拍卖活动，关心和帮助特殊儿童。多年
            以来一直有定向资助贫困学子，以及为孤寡老人送温暖，为有需要的群体提供帮助。</p>
            <p>星移共享以共享按摩椅以及共享车载按摩垫为桥梁，连接每一颗爱心，只要客户消费使用伊步共享产品，星移都会从收益中拿出相应比例
            的金额作为慈善金，捐赠到深圳市慈善会伊步慈善基金，用于特殊少儿群体的社区关怀、贫困学子教育资助、以及安老扶幼，让更多的人得到
            慈善救助中。</p>
		</div> -->
	</div>
</template>

<script>
import about from '../../components/about.vue'
export default {
  name: 'honor',
  data () {
    return {
      // noShow:false,
      // show:true
    }
  },
  components:{
  	about
  },
  methods:{
     // details(){
     // 	this.noShow=true
     // 	this.show=false
     // }
  }
}
</script>

<style scoped>
li{
    background-color: #fff;
    padding: 50px;
    margin-bottom: 38px;
}
ul img{
	float: right;
}
.fl div{
	font-size: 20px;
	color: #BDBCBC;
}
p{
	font-size: 32px;
	color: #000000;
	margin-top: 28px;
	margin-bottom: 38px;
}

</style>