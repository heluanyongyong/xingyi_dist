import Vue from 'vue'
import Router from 'vue-router'
import DownloadCenter from '@/components/DownloadCenter'
import About from '@/components/AboutXY/About'
import synopsis from '@/components/AboutXY/synopsis'
import prog from '@/components/AboutXY/prog'
import culture from '@/components/AboutXY/culture'
import team from '@/components/AboutXY/team'
import honor from '@/components/AboutXY/honor'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: synopsis
    },
    {
      path: '/DownloadCenter',
      component: DownloadCenter
    },
    {
      path: '/synopsis',
      component: synopsis
    },
    {
      path: '/prog',
      component: prog
    },
    {
      path: '/culture',
      component: culture
    },
    {
      path: '/team',
      component: team
    },
    {
      path: '/honor',
      component: honor
    }
  ]
})
