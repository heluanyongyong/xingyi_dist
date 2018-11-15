<template>
	<div>
   <div><img src="/about_img/header.png"></div>
   <div class="container ptb3">
     <h1>加入我们</h1>
     <table class="container tc font20">
       <thead>
         <tr class="bgGrey">
           <th>职位类型</th>
           <th>工作地点</th>
           <th>发布时间</th>
           <th>有效日期</th>
           <th>查看详情</th>
         </tr>
       </thead>
       <tbody class="tdColor">
         <tr>
           <td>PHP</td>
           <td>深圳 龙岗区</td>
           <td>2018-11-09</td>
           <td>2018-12-09</td>
           <td><img src="/about_img/down.png"></td>
         </tr>
         <tr>
           <td>研究员</td>
           <td>深圳</td>
           <td>1</td>
           <td>最新</td>
           <td><img src="/about_img/down.png"></td>
         </tr>
         <tr>
           <td>研究员</td>
           <td>深圳</td>
           <td>1</td>
           <td>最新</td>
           <td><img src="/about_img/down.png"></td>
         </tr>
         <tr>
           <td>研究员</td>
           <td>深圳</td>
           <td>1</td>
           <td>最新</td>
           <td><img src="/about_img/down.png"></td>
         </tr>
         <tr @click="show()" class="show">
           <td>研究员</td>
           <td>深圳</td>
           <td>1</td>
           <td>最新</td>
           <td><img src="/about_img/down.png" class="img"></td>
         </tr>
       </tbody>
     </table>
     <!-- 职位详情 -->
     <div class="join_box none">
       <ul class="clearfix">
         <li>职位类别：<span>品牌经理</span></li>
         <li>最低学历：<span>本科</span></li>
         <li>职位月薪：<span>12000-15000元/月</span></li>
         <li>&nbsp;</li>
       </ul>
       <ul class="clearfix">
         <li>工作经验：<span>3-5年</span></li>
         <li>工作性质：<span>全职</span></li>
         <li>工作地点：<span>深圳</span></li>
         <li>招聘人数：<span>1人</span></li>
       </ul>
       <!-- 岗位职责 -->
       <p>岗位职责:</p>
       <ol>
         <li>负责品牌项目的全案策划及执行，根据项目方案进行项目沟通与具体工作推进。</li>
         <li>根据项目要求，进行项目品牌策划以及品牌传播方案的创意撰写。</li>
         <li>负责客户谈判、客户管理、供应商管理，并建立相关资源库。</li>
       </ol>
       <!-- 任职要求 -->
       <p>任职要求:</p>
       <ol>
         <li>中文、广告传播、市场营销、策划、新闻、公关等相关专业本科以上学历。</li>
         <li>有创意，有经验，有担当，有执行力和超强的学习能力。</li>
         <li>有团队执行项目能力及经验。</li>
         <li>有较熟练的客户谈判技巧和实战能力。</li>
         <li>熟悉品牌建设项目沟通，品牌分析、定位、品牌核心价值体系建设、品牌形象塑造、品牌诉求、品牌推广等策略性工作与流程。</li>
         <li>从事品牌策划2年以上工作经验，有品牌策划、营销策划、广告策划等工作经历，曾任职于咨询策划公司、品牌设计公司、广告公司的相同职位者优先。</li>
         <li>有全案策划、品牌整合推广及策略执行能力，有较为成熟的案例作品。</li>
         <li>熟练掌握应用如 word、Excel、PPT 等图文办公软件。</li>
         <li>熟练掌握应用如PS、InDesign、AI等图像设计处理软件。</li>
       </ol>
       <!-- 薪资福利 -->
       <p>薪资福利:</p>
       <ol>
         <li>提供业内极具竞争力薪资；</li>
         <li>按照国家规定，为员工缴纳社保和住房公积金；</li>
         <li>享受国家法定节假日；</li>
         <li>享受带薪年假；</li>
         <li>享受节日慰问礼品；</li>
         <li>每年多次旅游和团队活动；</li>
         <li>良好的工作环境和团队氛围。</li>
         <li>工作时间：五天工作制</li>
       </ol>
       <!-- 联系方式 -->
       <p>联系方式:</p>
       <dl>
         <dd>联 系 人：<span>唐小姐</span></dd>
         <dd>招聘专线：<span>0755-33096291</span></dd>
         <dd>简历邮箱：<span>ipo-hr@qianzhan.com</span></dd>
         <dd>公司官网：<span>www.qianzhan.com.cn</span></dd>
         <dd>门户网站：<span>www.qianzhan.com</span></dd>
         <dd>公司地址：<span>深圳市龙岗区坂田街道云里智能园3栋c4—c5室</span></dd>
       </dl>
     </div>
   </div> 
  </div>
</template>

<script>
export default {
  name: 'join',
  data () {
    return {

    }
  },
  methods:{
      show(){
        if($('.join_box').is(":visible")){
            $('.join_box').hide();
            $('.img').attr('src','/about_img/down.png')
            $('.show').removeClass('bgGrey')
        }else{
            $('.join_box').show();
            $('.img').attr('src','/about_img/up.png')
            $('.show').addClass('bgGrey')
        }
      }
  }   
}
</script>

<style scoped>
h1{
  margin-bottom: 36px;
}
.bgGrey{
  background-color: #F3F3F5
}
th,td{
  padding: 24px 0;
}
.tdColor{
  color:  #686868;
}
tbody tr:hover{
  background-color: #F3F3F5
}
/*工作详情*/
.join_box{
  font-size: 14px;
  color: #747474;
  margin-left: 90px;
}
ul li{
  width: 260px;
  text-align: left;
  margin-top: 27px;
  float: left;
}
ol>li{
  margin-left: 14px;
  margin-bottom:8px;
}
p{
  margin: 27px 0 12px 0 
}
dd{
  margin-bottom: 5px;
}
</style>