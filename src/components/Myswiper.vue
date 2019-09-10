<template>
  <div class="box">

    <div class="myswiper">
      <mt-swipe :auto="4000">

        <mt-swipe-item class="myitem" v-for="(item,index) in long" :key="index">
          <img :src="item.src" alt="">
        </mt-swipe-item>

      </mt-swipe>
    </div>

  </div>
</template>

<script>

import Vue from 'vue'
// 引入轮播图
import { Swipe, SwipeItem } from 'mint-ui'

import axios from 'axios'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

export default {
  data () {
    return {
      long: []
    }
  },
  name: 'box',
  components: {

  },
  methods: {
    goodList () {
      axios.get('http://localhost:3000/img').then((res) => {
        // console.log(res);
        this.long = res.data
      })
    }
  },
  mounted () {
    this.goodList()
  }
}
</script>

<style scoped lang="scss">
  .myswiper{
    width: 100%;
    height: 1.86rem;
    .mint-swipe-indicator{
      opacity: 0.8 ;
      background: red ;
    }
    .myitem{
      width: 100%;
      height: 100%;
      img{
        height: 100%;
        width: 100%;
      }
    }
  }
</style>
