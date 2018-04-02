import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)
import Layout from 'page/layout/layout'
import Layout2 from 'page/layout/layout2'
import Hello from 'components/Hello'
import Props from 'components/props'
import Emit from '@/components/emit'
import Slot from 'components/slot'
import IsComponent from 'components/isComponent'
import EmitProps from 'page/emit/emit'
import Total from '../page/total/total.vue'
import Direct from 'components/directives/direct'

Vue.use(Router)
// Vue.use(VueRouterTitle, options)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/hello'
    },
    // no layout
    {
      path: '/404',
      component: _import('errorPage/404')
    },
    {
      path: '/total',
      component: Total
    },
    {
      path: '/list',
      component: _import('articles/articles'),
      meta: {
        title: '使用mockjs'
      }
    },
    // has layout
    {
      path: '',
      component: Layout,
      redirect: 'hello',
      children: [{
        path: 'hello',
        component: Hello,
        name: 'hello',
        meta: {title: 'hello'}
      }]
    },
    {
      path: '',
      component: Layout,
      redirect: 'props',
      children: [{
        path: 'props',
        component: Props,
        name: 'props',
        meta: {title: 'props'}
      }]
    },
    {
      path: '',
      component: Layout,
      redirect: 'emit',
      children: [{
        path: 'emit',
        component: Emit,
        name: 'emit',
        meta: {title: 'emit'}
      }]
    },
    {
      path: '',
      component: Layout,
      redirect: 'slot',
      children: [{
        path: 'slot',
        component: Slot,
        name: 'slot',
        meta: {title: 'slot'}
      }]
    },
    {
      path: '',
      component: Layout,
      redirect: 'isComponent',
      children: [{
        path: 'isComponent',
        component: IsComponent,
        name: 'isComponent',
        meta: {title: 'isComponent'}
      }]
    },
    {
      path: '',
      component: Layout,
      redirect: 'emitProps',
      children: [{
        path: 'emitProps',
        component: EmitProps,
        name: 'emitProps',
        meta: {title: 'emitProps'}
      }]
    },
    // 第二个layout
    {
      path: '',
      component: Layout2,
      redirect: 'direct',
      children: [{
        path: 'direct',
        component: Direct,
        name: 'direct',
        meta: {title: 'direct'}
      }]
    }
    // // 引入import简化路由组件 注意vue-loader的版本，先改版本号，然后删除，再安装
    // // { path: '/404', component: _import('errorPage/404') },
    // {
    //   path: '/404',
    //   // component: p404,
    //   component: _import('errorPage/404')
    // }
  ]
})
