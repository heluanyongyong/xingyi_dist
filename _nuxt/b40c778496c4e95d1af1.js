(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{292:function(t,n,e){"use strict";(function(t){e(152);n.a={head:{title:"游戏中心"},mounted:function(){},data:function(){return{}},methods:{change_gametitle:function(n){t(".gametitle").find("a").eq(n).addClass("active").siblings().removeClass("active"),t(".listtitle li a").removeClass("active"),t(".gamecontent").fadeOut().fadeIn(500)},change_listtitle:function(n){t(".listtitle li").eq(n).find("a").addClass("active").parent("li").siblings().find("a").removeClass("active"),t(".gamecontent").fadeOut().fadeIn(500)},change_tablepages:function(n){t(".content_left_bottom tfoot span").eq(n).addClass("active").siblings().removeClass("active"),t(".content_left_bottom tbody").fadeOut().fadeIn(250)},img_active:function(){this.$router.push("/games_center/infos")}}}}).call(this,e(284))},293:function(t,n,e){var a=e(337);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,e(12).default)("34f52b4c",a,!0,{})},336:function(t,n,e){"use strict";var a=e(293);e.n(a).a},337:function(t,n,e){(t.exports=e(11)(!1)).push([t.i,"\n.container[data-v-5f943b35]{width:1200px;margin:0 auto\n}\n.clear[data-v-5f943b35]{clear:both\n}\n.hide[data-v-5f943b35]{display:none\n}\na[data-v-5f943b35],button[data-v-5f943b35]{cursor:pointer\n}\na[data-v-5f943b35],button[data-v-5f943b35],input[data-v-5f943b35]{outline:none\n}\n.input_text[data-v-5f943b35]{width:100%;height:45px;border:1px solid #d6d6d6;border-radius:5px;padding:0 20px;font-size:16px;margin:10px 0\n}\n.input_checkbox[data-v-5f943b35]{width:20px;height:20px;border-radius:3px\n}\n.button_active[data-v-5f943b35]{width:100%;background:#fd8f24;height:50px;margin:10px 0;color:#fffefe;font-size:18px;border-radius:5px\n}\na.active[data-v-5f943b35]{color:#fd8f24!important\n}\nbutton.active[data-v-5f943b35]{background:#fd8f24!important;color:#fff!important\n}\n.middle_input[data-v-5f943b35]{border-radius:5px 0 0 5px;float:left;width:65%!important\n}\n.middle_button[data-v-5f943b35]{border-radius:0 5px 5px 0;height:45px;float:left;width:35%!important;margin:10px 0;background:#fff;border:1px solid #d6d6d6;border-left:none;color:#fd8f24;font-size:16px\n}\nol[data-v-5f943b35],ul[data-v-5f943b35]{list-style:none\n}\n.bggray[data-v-5f943b35]{background:#f8f8f8;padding:40px 0 60px\n}\n.dialog[data-v-5f943b35]{padding:80px\n}\n.dialog .dialog-content[data-v-5f943b35]{text-align:center\n}\n.dialog .dialog-content img[data-v-5f943b35],.dialog .dialog-content span[data-v-5f943b35]{vertical-align:middle\n}\n.dialog .dialog-content img[data-v-5f943b35]{width:50px\n}\n.dialog .dialog-content span[data-v-5f943b35]{margin-left:20px;font-size:24px\n}\n.dialog .dialog-bottom[data-v-5f943b35]{text-align:center\n}\n.dialog .dialog-bottom button[data-v-5f943b35]{width:150px;background:#fd8f24;color:#fffefe;border-radius:5px;height:45px;margin-top:40px\n}\n.text_overflow[data-v-5f943b35]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden\n}\n.top3 img[data-v-5f943b35]{width:100%\n}\n.center[data-v-5f943b35]{padding:45px 0;background:#f8f8f8\n}\n.center .container[data-v-5f943b35]{width:1200px;margin:0 auto\n}\n.center .container .content_left[data-v-5f943b35]{float:left;width:25%\n}\n.center .container .content_left .content_left_top[data-v-5f943b35]{width:92%;background:#fff;color:#666;font-size:22px;margin-left:-5px\n}\n.center .container .content_left .content_left_top .warp[data-v-5f943b35]{padding:30px 40px\n}\n.center .container .content_left .content_left_top .warp .title[data-v-5f943b35]{font-weight:700;margin-bottom:20px;letter-spacing:2px\n}\n.center .container .content_left .content_left_top .warp li[data-v-5f943b35]{height:40px;line-height:40px;font-size:18px;padding-left:20px\n}\n.center .container .content_left .content_left_top .warp li a[data-v-5f943b35]{color:#333\n}\n.center .container .content_left .content_left_top .warp li a.active[data-v-5f943b35]{color:#fd8f24\n}\n.center .container .content_left .content_left_bottom[data-v-5f943b35]{margin-top:43px;width:92%;background:#fff;color:#666;font-size:22px;margin-left:-5px\n}\n.center .container .content_left .content_left_bottom .title[data-v-5f943b35]{padding:20px 0 10px 15px;font-weight:700;letter-spacing:6px\n}\n.center .container .content_left .content_left_bottom table[data-v-5f943b35]{width:100%\n}\n.center .container .content_left .content_left_bottom table thead tr[data-v-5f943b35]{color:#333;font-size:16px;background:#efefef;width:33.333333333333336%;text-align:center\n}\n.center .container .content_left .content_left_bottom table thead tr td[data-v-5f943b35]{width:33.333333333333336%;padding:15px 0;font-weight:700;font-size:15px\n}\n.center .container .content_left .content_left_bottom table thead tr td[data-v-5f943b35]:first-child{padding-left:5px\n}\n.center .container .content_left .content_left_bottom table thead tr td[data-v-5f943b35]:last-child{padding-right:5px\n}\n.center .container .content_left .content_left_bottom table tbody tr[data-v-5f943b35]{color:#666;font-size:13px;background:#fff;width:33.333333333333336%;text-align:center\n}\n.center .container .content_left .content_left_bottom table tbody tr td[data-v-5f943b35]{width:33.333333333333336%;padding:7px 0\n}\n.center .container .content_left .content_left_bottom table tbody tr:hover td[data-v-5f943b35]{color:#fd8f24;cursor:pointer\n}\n.center .container .content_left .content_left_bottom table tbody tr td[data-v-5f943b35]{font-size:12px\n}\n.center .container .content_left .content_left_bottom table tbody tr td[data-v-5f943b35]:first-child{padding-left:5px\n}\n.center .container .content_left .content_left_bottom table tbody tr td[data-v-5f943b35]:last-child{padding-right:5px\n}\n.center .container .content_left .content_left_bottom table tfoot tr td[data-v-5f943b35]{text-align:center;padding-bottom:10px\n}\n.center .container .content_left .content_left_bottom table tfoot tr td span[data-v-5f943b35]{width:10px;height:10px;background:#d3d3d3;border-radius:50%;display:inline-block\n}\n.center .container .content_left .content_left_bottom table tfoot tr td span.active[data-v-5f943b35]{width:25px;border-radius:10px;background:#fd8f24\n}\n.center .container .content_right[data-v-5f943b35]{float:right;width:75%\n}\n.center .container .content_right .gametitle a[data-v-5f943b35]{margin-right:50px;color:#010101;font-size:20px\n}\n.center .container .content_right .gametitle a.active[data-v-5f943b35]{color:#fd8f24\n}\n.center .container .content_right .gamecontent ul li[data-v-5f943b35]{float:left;width:20%;margin-top:25px\n}\n.center .container .content_right .gamecontent ul li .divcontent[data-v-5f943b35]{width:95%;margin:0 2.5%;background:#fff\n}\n.center .container .content_right .gamecontent ul li .divcontent .imgdiv[data-v-5f943b35]{line-height:0;position:relative\n}\n.center .container .content_right .gamecontent ul li .divcontent .imgdiv:hover .pos_info[data-v-5f943b35]{opacity:1\n}\n.center .container .content_right .gamecontent ul li .divcontent .imgdiv img[data-v-5f943b35]{width:100%\n}\n.center .container .content_right .gamecontent ul li .divcontent .imgdiv .pos_info[data-v-5f943b35]{transition:all .5s;opacity:0;position:absolute;width:100%;height:100%;background:rgba(0,0,0,.6);top:0;left:0;text-align:center\n}\n.center .container .content_right .gamecontent ul li .divcontent .imgdiv .pos_info .info[data-v-5f943b35]{margin-top:110px\n}\n.center .container .content_right .gamecontent ul li .divcontent .imgdiv .pos_info .info a[data-v-5f943b35]{transition:all .5s;color:#fff\n}\n.center .container .content_right .gamecontent ul li .divcontent .imgdiv .pos_info .info a[data-v-5f943b35]:hover{color:#fd8f24\n}\n.center .container .content_right .gamecontent ul li .divcontent p[data-v-5f943b35]{text-align:center;margin-top:10px\n}\n.center .container .content_right .gamecontent ul li .divcontent p.title[data-v-5f943b35]{font-size:18px;font-weight:700;margin-bottom:15px;padding:0 20px\n}\n.center .container .content_right .gamecontent ul li .divcontent p.content[data-v-5f943b35]{font-size:12px\n}\n.center .container .content_right .gamecontent ul li .divcontent p.content[data-v-5f943b35]:last-child{padding-bottom:15px\n}",""])},398:function(t,n,e){"use strict";e.r(n);var a=e(292).a,i=(e(336),e(3)),o=Object(i.a)(a,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._m(0),t._v(" "),e("div",{staticClass:"center"},[e("div",{staticClass:"container"},[e("div",{staticClass:"content_left"},[e("div",{staticClass:"content_left_top"},[e("div",{staticClass:"warp"},[e("div",{staticClass:"title"},[t._v("热门标签")]),t._v(" "),e("ul",{staticClass:"listtitle"},[e("li",[e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(n){t.change_listtitle(0)}}},[t._v("棋牌")])]),t._v(" "),e("li",[e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(n){t.change_listtitle(1)}}},[t._v("篮球")])]),t._v(" "),e("li",[e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(n){t.change_listtitle(2)}}},[t._v("单机")])]),t._v(" "),e("li",[e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(n){t.change_listtitle(3)}}},[t._v("免费")])]),t._v(" "),e("li",[e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(n){t.change_listtitle(4)}}},[t._v("职业")])])])])]),t._v(" "),e("div",{staticClass:"content_left_bottom"},[e("div",{staticClass:"title"},[t._v("开服")]),t._v(" "),e("table",[t._m(1),t._v(" "),e("tbody",t._l(20,function(n){return e("tr",{key:n},[e("td",[t._v("王者归来...")]),t._v(" "),e("td",[t._v("10.29 14:00")]),t._v(" "),e("td",[t._v("王者归来...")])])})),t._v(" "),e("tfoot",[e("tr",[e("td",{attrs:{colspan:"3"}},[e("span",{on:{click:function(n){t.change_tablepages(0)}}}),t._v(" "),e("span",{staticClass:"active",on:{click:function(n){t.change_tablepages(1)}}}),t._v(" "),e("span",{on:{click:function(n){t.change_tablepages(2)}}})])])])])])]),t._v(" "),e("div",{staticClass:"content_right"},[e("div",{staticClass:"gametitle"},[e("a",{staticClass:"active",attrs:{href:"javascript:void(0);"},on:{click:function(n){t.change_gametitle(0)}}},[t._v("所有游戏")]),t._v(" "),e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(n){t.change_gametitle(1)}}},[t._v("热门游戏")]),t._v(" "),e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(n){t.change_gametitle(2)}}},[t._v("手机游戏")]),t._v(" "),e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(n){t.change_gametitle(3)}}},[t._v("网页游戏")])]),t._v(" "),e("div",{staticClass:"gamecontent"},[e("ul",t._l(15,function(n){return e("li",{key:n},[e("div",{staticClass:"divcontent"},[e("div",{staticClass:"imgdiv"},[e("img",{attrs:{src:"/games_center/gamelist1.png",alt:""}}),t._v(" "),e("div",{staticClass:"pos_info",on:{click:t.img_active}},[e("div",{staticClass:"info"},[e("nuxt-link",{attrs:{to:"/games_center/infos"}},[t._v("查看详情 >>")])],1)])]),t._v(" "),e("p",{staticClass:"title text_overflow"},[t._v("剑灵")]),t._v(" "),e("p",{staticClass:"content"},[t._v("上线时间：2017-10-28")]),t._v(" "),e("p",{staticClass:"content"},[t._v("运营代理商：星移盒子")])])])}))])]),t._v(" "),e("div",{staticClass:"clear"})])])])},[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"top3"},[n("img",{attrs:{src:"/games_center/banner.png",alt:""}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("thead",[n("tr",[n("td",[this._v("游戏名称")]),this._v(" "),n("td",[this._v("开服时间")]),this._v(" "),n("td",[this._v("新服名称")])])])}],!1,null,"5f943b35",null);o.options.__file="index.vue";n.default=o.exports}}]);