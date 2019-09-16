<template>
  <div class="footer-lise">
    <h2>大家都在搜</h2>
    <div class="list">
      <ul>
        <li v-for="(ele,index) in list" @click="aaa(ele)" :key='index'>
          <img :src="ele.imgUrl" alt="">
          <h3>{{ele.course_name}}</h3>
          <p>{{ele.autor}}</p>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import {
  getAnimeList
} from '../api/index.js'
import Aaa from '../views/aaa.vue'
export default {
  name: 'Footer',
  data: function () {
    return {
      list: []
    }
  },
  methods: {
    getList: function () {
      getAnimeList().then((res) => {
        this.list = res.data
      })
    },
    aaa (bbb) {
      this.$router.push('/aaa/' + bbb.id)
    }
  },
  mounted () {
    this.getList()
  }

}
</script>

<style scoped lang="scss">
  .footer-lise {
    h2 {
      font-size: 0.14rem;
      font-weight: 900;
      color: rgba(0, 0, 0, 0.4);
      height: 0.24rem;
      line-height: 0.24rem;
    }
  }

  .list {
    height: 1.96rem;
    width: 100%;

    ul {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .list-warp {
        width: 100%;
        display: flex;
      }

      li {
        width: 33%;

        p {
          line-height: 0.20rem;
          font-size: 0.10rem;
          color: rgba(0, 0, 0, 0.4);
          width: 1.00rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
        }
      }
    }

    img {
      width: 0.89rem;
      height: 1.19rem;
    }
  }
</style>
