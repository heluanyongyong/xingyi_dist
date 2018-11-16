<template>
	<div class="bgColor">
		<about></about>
		<div class="container ptb3">
			<h2 class="tc">星移盒子</h2>
			<!-- 价值观 -->
			<div class="clearfix">
			   <img src="/about_img/money.png" class="fl">
			   <div class="fl">
			   	   <h3>价值观</h3>
                   <p>勤奋：天道酬勤，既要做到肢体勤奋，也要做到思想勤奋；并且方向明确，专心致志，坚持不懈。</p>
                   <p>务实：不操他人该操之心，恪守本职，独挡一面，做到最好。</p>
                   <p>简单：思维简洁，以把事情做好为唯一宗旨；以自我繁琐的千倍付出，换取用户认知与操作简洁的一滴。</p>
                   <p>细致：思考问题没有遗漏；修改问题不厌其烦；解决问题不留尾巴。</p>
			   </div>
			</div>
			<div class="clearfix">
				<!-- 使命 -->
				<div class="clearfix fl w580">
					<img src="/about_img/mission.png" class="fl">
					<div>
						<h3>使命</h3>
						<p>凝聚我们力量，收获明日辉煌！</p>
					</div>
				</div>
				<!-- 愿景 -->
				<div class="clearfix fl w580">
					<img src="/about_img/hope.png" class="fl">
					<div>
						<h3>愿景</h3>
						<p>立志成为全球第一游戏CP让团队中的每一个人都令人尊敬成就一段没有遗憾的人生</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import about from '../../components/about.vue'
export default {
  name: 'culture',
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
img{
	margin-right: 60px;
}
h2{
	margin-bottom: 70px;
}
p{
	font-size: 18px;
	color: #333333;
	margin-bottom: 5px;
}
.w580{
	width: 580px;
	margin-top: 100px;
}
h3{
	margin-bottom: 20px;
}
</style>