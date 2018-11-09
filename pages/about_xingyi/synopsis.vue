<template>
	<div class="bgColor">
			<about></about>
			<div class=" clearfix box pd3">
				<img src="/about_img/company.png" alt="图片加载中..." class="w30 fl">
				<div class="fr w70 mt2">
					<h2 class="tc">星移网络</h2>
					<p class="textIn pt3">
						 深圳星移网络科技有限公司成立于2017年，是一家集软件开发、运营推广、营销策划、新媒体传
		                 播为主的移动互联网公司。星移网络以规范、专业、创新、共赢的经营理念，高效贴心的服务，团结协
		                 作、敬业负责、服务奉献、求实进取的企业精神，始终贯彻以追求合作伙伴最大利益为目标，竭诚为合
		                 作伙伴提供最大程度的保障。我们将立志打造最精良的优秀团队，并为合作伙伴提供最优秀、最科学、
		                 最专业的服务，以获得合作者的信任和支持，打造属于我们自己的品牌。
					</p>
				</div>
			</div>
	</div>
</template>

<script>
import about from '../../components/about.vue'
export default {
  name: 'synopsis',
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
.w70{
	width: 65%;
}
.w30{
	width: 30%;
}
.textIn{
	text-indent: 2em;
}
.box{
	margin: 0 15%;
}
</style>