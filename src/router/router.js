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
      name: 'search',
      component: Search
    },
    {
      path: '/aaa/:id',
      name: 'aaa',
      component: Aaa
    },
    {
      path: '/collect',
      name: 'collect',
      component: Collect
    },
    {
      path: '/history',
      name: 'history',
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
      name: 'detail',
      component: Detail
    },
    {
      path: '/topic/',
      name: 'topic',
      component: Topic
    },
    {
      path: '/category',
      name: 'index',
      component: Category
    },
    {
      path: '/listAll',
      name: 'listAll',
      component: ListAll
    },
    {
      path: '/listStt',
      name: 'listStt',
      component: ListStt
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    }
  ]
})
