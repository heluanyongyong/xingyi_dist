<template>
	<div class="bgColor">
		<about></about>
		<ul class="ul tl mg50 pd3">
			<li class="clearfix li">
				<div class="fl w70">
					<div>2016-06</div>
					<p>荣誉证书</p>
					<div>我们一步一脚印，坚持稳中求进；不断创新，不断发展</div>
				</div>
				<img src="/about_img/zc2@2x.png" class="fr w30">
			</li>
			<li class="clearfix li">
				<div class="fl w70">
					<div>2016-06</div>
					<p>荣誉证书</p>
					<div>我们一步一脚印，坚持稳中求进；不断创新，不断发展</div>
				</div>
				<img src="/about_img/zc2@2x.png" class="fr w30">
			</li>
			<li class="clearfix li">
				<div class="fl w70">
					<div>2016-06</div>
					<p>荣誉证书</p>
					<div>我们一步一脚印，坚持稳中求进；不断创新，不断发展</div>
				</div>
				<img src="/about_img/zc2@2x.png" class="fr w30">
			</li>
		</ul>
	</div>
</template>

<script>
import about from '../../components/about.vue'
export default {
  name: 'honor',
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
.ul li{
    background-color: #fff;
    padding: 3rem;
    margin-bottom: 2rem;
}
.w70{
	width: 65%;
}
.w30{
	width: 25%;
}
.li div{
	font-size: 1rem;
	color: #BDBCBC;
}
.li p{
	font-size: 1.6rem;
	color: #000000;
	margin-top: 8px;
	margin-bottom: 12px;
}

</style>