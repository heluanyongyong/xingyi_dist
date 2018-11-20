<template>
	<div class="bgColor">
		<div class="clearfix container ptb3">
			<div>"天命"搜索到<span>3</span>条相关的内容</div>
			<ul class="bgWhite clearfix">
				<li class="clearfix" @click="click_games">
					<img src="/games_list/games1.png" class="fl">
					<div class="fl clearfix data_box font16">
						<h2>天命奇御</h2>
						<div class="fl">
							<p>在线人数：<span>167985</span></p>
							<p>游戏类型：<span>角色</span></p>
						</div>
						<div class="fl">
							<p>更新时间：<span>2017-10-23</span></p>
						</div>
					</div>
				</li>
				<li class="clearfix">
					<img src="/games_list/games1.png" class="fl">
					<div class="fl clearfix data_box">
						<h2>天命奇御</h2>
						<div class="fl">
							<p>在线人数：<span>167985</span></p>
							<p>游戏类型：<span>角色</span></p>
						</div>
						<div class="fl">
							<p>更新时间：<span>2017-10-23</span></p>
						</div>
					</div>
				</li>
				<li class="clearfix">
					<img src="/games_list/games1.png" class="fl">
					<div class="fl clearfix data_box">
						<h2>天命奇御</h2>
						<div class="fl">
							<p>在线人数：<span>167985</span></p>
							<p>游戏类型：<span>角色</span></p>
						</div>
						<div class="fl">
							<p>更新时间：<span>2017-10-23</span></p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
  name: 'grabble',
  head(){
		return{
			title:'搜索列表'
		}
	},
  data () {
    return {
      
    }
  },
  methods:{
  	click_games(){
  		this.$router.push('/games_center/infos');
  	}
  }
}
</script>

<style scoped>
ul{
	padding: 20px 40px;
}
p{
	margin-top: 25px;
}
.data_box div,h2{
	margin: 0 50px 0 18px;
}
h2,span{
	color: #FD8F24
}
li{
	border-bottom: 1px #BDBDBD dashed;
	padding: 22px 0;
}
li:last-child{
	border-bottom: none;
}
</style>