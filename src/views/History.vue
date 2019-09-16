<template>
  <div class="cont" ref="cont">
    <ColHisHeader></ColHisHeader>
    <section class="wrap">
      <div class="loading">
        <div class="loading-warp">
          <p>登录同步后可展示云书架中的漫画</p>
          <router-link to="/login">登录</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {
    getEqualData,
    getAnimeList
  } from '../api/index.js'

  import aaa from '../views/aaa.vue'
  import ColHisHeader from '../components/ColHisHeader.vue'

  export default {
    name: 'History',
    components: {
      ColHisHeader,
    },
    data: function () {
      return {
        idAll: [],
        setId: []
      }
    },
    methods: {
      getId() {
        /* console.log(Footer) */
        /* var id = this.$route.params.id; */
        /* console.log(id); */
        getAnimeList().then((res) => {
          /* console.log(res); */
          if (res.status == 200) {
            this.idAll = res.data
            /* console.log(this.idAll) */
          }
        })
      }
    },
    mounted: function () {
      this.getId()
      if (localStorage.getItem('time')) {
        this.list = JSON.parse(localStorage.getItem('time'))
        /* this.$refs.cont.innerHTML = null; */
      } else {
        this.list = []
      }
      /*console.log(this.list)*/
    },
    created: function () {
      /* var id = this.$route.params.id; */
      /* console.log(id + '是是是是'); */
      // this.list = JSON.parse(localStorage.getItem("time"))||"[]";

      /* console.log(this.list) */
      /* console.log(1); */
    }
  }
</script>

<style scoped lang="scss">
  .wrap {
    background: #F5F5EE;
    padding: .04rem;
    box-sizing: border-box;
  }

  .loading {

    background: #f5f5ee;
    margin: 0.01rem;
    box-sizing: border-box;

    .loading-warp {
      height: 0.34rem;
      position: relative;
      background: rgba(255, 255, 255, 0.8);
      top: 0rem;
      left: 0rem;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;

      p {
        line-height: 0.34rem
      }

      a {
        width: 0.63rem;
        height: 0.25rem;
        background: orange;
        color: #FFFFFF;
        display: block;
        line-height: 0.25rem;
        margin: 0;
        padding: 0;
      }
    }

    img {
      width: 1.49rem;
      height: 1.16rem;
      margin-top: 0.30rem;
    }

    p {
      line-height: 0.26rem;
      color: rgba(0, 0, 0, 0.2);
    }

    a {
      width: 0.97rem;
      height: 0.38rem;
      border: 1px solid orange;
      color: orange;
      display: block;
      line-height: 0.38rem;
      margin: 0 auto;
      margin-top: 0.15rem;
    }
  }
</style>