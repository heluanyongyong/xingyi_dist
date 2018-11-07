<template>
  <div>
    <div  class="download_bgimg1">
      <div class="mg50 clearfix pd5">
        <div class="tc fl w30 rel">
          <img src="../../static/down_img/box.png" alt="图片加载中..">
          <img src="../../static/down_img/star.png" alt="图片加载中.." class="abs">
        </div>
        <div class="tl white fr w70">
          <p class="mb5">
            <img src="../../static/down_img/text1.png" alt="文字加载中.." class="w50">
          </p>
          <p class="bgYellow black borR20 tc mar0">
            <img src="../../static/down_img/download.png"> <span><a href="javascript:">下载星移盒子APP</a></span>
          </p>
        </div>
      </div>
    </div>
    <div class="download_bgimg2">
        <div class="mg50 clearfix pd5">
          <div class="w30 fl">
            <p><img src="../../static/down_img/text2.png" alt="文字加载中.."></p>
            <p class="grey mt3"><a href="javascript:">带你发现更大的游戏世界</a></p>
          </div>
          <div class="fr w70"><img src="../../static/down_img/img8.png" alt="文字加载中.."></div>
        </div>
    </div>
    <div class="bgBlack tc pd5">
      <p><img src="../../static/down_img/text3.png" alt="文字加载中.."></p>
      <ul class="play_ul pd5">
        <li>
          <p><a href="javascript:"><img src="../../static/down_img/strategy.png" alt="图片加载中.."></a></p>
          <p><a href="javascript:">游戏攻略</a></p>
        </li>
        <li>
          <p><a href="javascript:"><img src="../../static/down_img/interflow.png" alt="图片加载中.."></a></p>
          <p><a href="javascript:">游戏社交</a></p>
        </li>
        <li>
          <p><a href="javascript:"><img src="../../static/down_img/consult.png" alt="图片加载中.."></a></p>
          <p><a href="javascript:">游戏咨询</a></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DownloadCenter',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.download_bgimg1{
  width: 100%;
  background: url(../../static/down_img/download_bgimg.png) no-repeat center center;
}
.download_bgimg2{
  width: 100%;
  background: url(../../static/down_img/download_bgimg2.png) no-repeat center center;
}
.borR20{
  border-radius:20px;
  width: 180px;
  line-height: 40px;
}
body .font5{
  font-size: 5rem;
}
body .mar0{margin: 0}
body .pd0{padding: 0}
.abs{
  position: absolute;
  top: -32%;
  right: 8%;
}
.rel{
  position: relative;
}
.w30{
  width: 25%
}
.w70{
  width: 60%;
}
.pd5{
  padding: 10rem 0;
}
.mb5{
  margin-bottom: 5%;
}
.play_ul a{
  color: #fff;
}
.play_ul li{
  float: left;
  margin-left: 20%;
}
.bgYellow{
  background-color: #FDD300
}
.mt3{
  margin-top: 3rem;
}
</style>
