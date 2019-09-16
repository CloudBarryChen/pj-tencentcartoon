<template>

  <div class="home">
    <Header></Header>
    <Myswiper></Myswiper>

  </div>
</template>

<script>

// @ is an alias to /src
import Header from '@/components/Header.vue'
import Myswiper from '@/components/Myswiper.vue'

export default {
  name: 'home',
  components: {
    Header,
    Myswiper
  }
}

</script>

<style>

</style>
