<template>
  <div>
    <div  class="download_bgimg1">
      <div class="clearfix pt5 container">
        <div class="tc fl w30 rel">
          <img src="/down_img/box.png" alt="图片加载中.." class="mt160">
          <img src="/down_img/star.png" alt="图片加载中.." class="abs">
        </div>
        <div class="tl white fr">
          <p class="mb116">
            <img src="/down_img/text1.png" alt="文字加载中.." class="w50">
          </p>
          <p class="bgYellow black borR20 tc mar0">
            <img src="/down_img/download.png" class="mid"> <a href="javascript:" id="a" class="mid">下载星移盒子APP</a>
          </p>
        </div>
      </div>
    </div>
    <div class="download_bgimg2">
        <div class="clearfix container download_div1">
          <div class="fl">
            <p><img src="/down_img/text2.png" alt="文字加载中.."></p>
            <p class="grey mt45 font24"><a href="javascript:">带你发现更大的游戏世界</a></p>
          </div>
          <img src="/down_img/img8.png" alt="文字加载中.." class="fr">
        </div>
    </div>
    <div class="bgBlack tc">
      <div class="container pd175">
        <p><img src="/down_img/text3.png" alt="文字加载中.." class="mb125"></p>
        <ul class="clearfix">
          <li>
            <p><a href="javascript:"><img src="/down_img/strategy.png" alt="图片加载中.."></a></p>
            <p><a href="javascript:">游戏攻略</a></p>
          </li>
          <li>
            <p><a href="javascript:"><img src="/down_img/interflow.png" alt="图片加载中.."></a></p>
            <p><a href="javascript:">游戏社交</a></p>
          </li>
          <li>
            <p><a href="javascript:"><img src="/down_img/consult.png" alt="图片加载中.."></a></p>
            <p><a href="javascript:">游戏咨询</a></p>
          </li>
        </ul>
      </div>
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
  height: 910px;
  background: url(../../static/down_img/download_bgimg.png) no-repeat center center;
}
.download_bgimg2{
  width: 100%;
  background: url(../../static/down_img/download_bgimg2.png) no-repeat center center;
}
.borR20{
  border-radius:40px;
  width: 360px;
  line-height: 80px;
}
.download_div1{
  padding: 136px 0;
}
body .mar0{
  margin: 0;
}
.abs{
  position: absolute;
  top: 4%;
  right: 13%;
}
.rel{
  position: relative;
}
.pt5{
  padding-top: 145px;
}
.mb116{
  margin: 50px 0 116px 0;
}
li a{
  color: #fff;
  font-size: 30px;
}
li{
  float: left;
  margin-top: 124px;
}
li:nth-child(2){
  margin: 124px 230px 0 230px;
}
.bgYellow{
  background-color: #FDD300
}
.mt45{
  margin-top: 45px;
}
#a{
  color: black;
  font-size:27px;
}
.font24 a{
  color: #999
}
.pd175{
  padding: 175px 0;
}
.mt160{
  margin-top: 160px;
}
</style>
