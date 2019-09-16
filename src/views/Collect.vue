<template>
  <div>
    <ColHisHeader></ColHisHeader>
    <section>
      <div class="loading">
        <img src="../assets/unload-girl.png" alt="">
        <p>大人，快快登录，<br>同步云书架，漫画们等着你哦</p>
        <router-link to="/login">登录</router-link>
      </div>
      <div class="list">
        <Footer></Footer>
      </div>
    </section>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import ColHisHeader from '../components/ColHisHeader.vue'


export default {
  name: 'Collect',
  components: {
    ColHisHeader,
    Footer,
  }
}
</script>

<style scoped lang="scss">
  .loading{
    height:2.47rem;
    background: #f5f5ee;
  img{
    margin-top: 0.10rem;
    width: 0.73rem;
    height: 1.3rem;
  }
    p{
      color: rgba(0,0,0,0.2);
    }
  a{
    width: 0.97rem;
    height: 0.38rem;
    border: 1px solid orange;
    color: orange;
    display: block;
    line-height: 0.38rem;
    margin: 0 auto  ;
    margin-top: 0.10rem;
  }
  }
</style>
