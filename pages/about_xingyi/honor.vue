<template>
	<div class="bgColor">
		<about></about>
		<ul class="tl mg50 pd3">
			<li class="clearfix li">
				<div class="fl w70">
					<div>2016-06</div>
					<p>荣誉证书</p>
					<div>我们一步一脚印，坚持稳中求进；不断创新，不断发展</div>
				</div>
				<img src="/about_img/zc2@2x.png" alt="图片加载中..">
			</li>
			<li class="clearfix li">
				<div class="fl w70">
					<div>2016-06</div>
					<p>荣誉证书</p>
					<div>我们一步一脚印，坚持稳中求进；不断创新，不断发展</div>
				</div>
				<img src="/about_img/zc2@2x.png" alt="图片加载中..">
			</li>
			<li class="clearfix li">
				<div class="fl w70">
					<div>2016-06</div>
					<p>荣誉证书</p>
					<div>我们一步一脚印，坚持稳中求进；不断创新，不断发展</div>
				</div>
				<img src="/about_img/zc2@2x.png" alt="图片加载中..">
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
li{
    background-color: #fff;
    padding: 3rem;
    margin-bottom: 2rem;
}
.w70{
	width: 65%;
}
img{
	width: 20%;
	float: right;
}
.li div{
	font-size: 10px;
	color: #BDBCBC;
}
.li p{
	font-size: 16px;
	color: #000000;
	margin-top: 8px;
	margin-bottom: 12px;
}

</style>