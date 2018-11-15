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