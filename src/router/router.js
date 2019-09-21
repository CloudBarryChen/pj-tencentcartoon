import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'

import More from '../views/More-list.vue'
import Countent from '../views/countent.vue'

import Detail from '../views/Detail.vue'
import Topic from '../views/Topic.vue'

import Category from '../views/category/index.vue'
import ListAll from '../views/category/listAll.vue'
import ListStt from '../views/category/listStt.vue'

const Collect = () => import('../views/Collect.vue')
const History = () => import('../views/History.vue')
const Aaa = () => import('../views/aaa.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: '搜索',
      component: Search
    },
    {
      path: '/aaa/:id',
      name: 'aaa',
      component: Aaa
    },
    {
      path: '/collect',
      name: '收藏',
      component: Collect
    },
    {
      path: '/history',
      name: '历史',
      component: History
    },
    {
      path: '/countent',
      name: 'countent',
      component: Countent
    },
    {
      path: '/more/:id',
      name: 'more',
      component: More
    },
    {
      path: '/detail/',
      name: '详情',
      component: Detail
    },
    {
      path: '/topic/',
      name: 'topic',
      component: Topic
    },
    {
      path: '/category',
      name: '分类',
      component: Category
    },
    {
      path: '/listAll',
      name: '分类-1',
      component: ListAll
    },
    {
      path: '/listStt',
      name: '分类-2',
      component: ListStt
    },
    {
      path: '/login',
      name: '登陆',
      component: () => import('../views/Login.vue')
    }
  ]
})
