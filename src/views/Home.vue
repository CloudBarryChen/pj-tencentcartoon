<template>
  <div class="home">
    <Myswiper></Myswiper>
    <countent></countent>
  </div>
</template>

<script>
// @ is an alias to /src

import Myswiper from '@/components/Myswiper.vue'
import countent from './countent.vue'

export default {
  name: 'home',
  components: {
    Myswiper,
    countent
  },
  methods: {
    isTitleShow: function (arg) {
      this.$store.commit('titleShowHandler', arg)
    }
  },
  mounted () {
    this.isTitleShow(true)
  },
  destroyed () {
    this.isTitleShow(false)
  }
}
</script>

<style>
</style>
