<template>
  <div>
    <div class="list">
      <van-tabs v-model="active">
        <van-tab title="更新">
          <ul class="list_update">
            <li v-for="(inte,index) in genxi" :key="index">
              <div class="comic-cover"><img :src="inte.imgUrl" alt=""></div>
              <div class="comic-info">
                <h2>{{inte.name}}</h2>
                <p>{{inte.title}}</p>
                <p>{{inte.tag}}</p>
                <p>{{inte.hot}}</p>
              </div>
            </li>
          </ul>
        </van-tab>
        <van-tab title="人气">
          <ul class="list_update">
            <li v-for="(inte,index) in rengqi" :key="index">
              <div class="comic-cover"><img :src="inte.imgUrl" alt=""></div>
              <div class="comic-info">
                <h2>{{inte.name}}</h2>
                <p>{{inte.title}}</p>
                <p>{{inte.tag}}</p>
                <p>{{inte.hot}}</p>
              </div>
            </li>
          </ul>
        </van-tab>
        <van-tab title="收藏">
          <ul class="list_update">
            <li v-for="(inte,index) in shouc" :key="index">
              <div class="comic-cover"><img :src="inte.imgUrl" alt=""></div>
              <div class="comic-info">
                <h2>{{inte.name}}</h2>
                <p>{{inte.title}}</p>
                <p>{{inte.tag}}</p>
                <p>{{inte.hot}}</p>
              </div>
            </li>
          </ul>
        </van-tab>
      </van-tabs>
    </div>
  </div>

</template>
<script>
  // import { request } from 'http';
  import request from '../../untils/axios'


  export default {

    data() {
      return {
        active: '',
        genxi: [],
        rengqi: [],
        shouc: []
      }
    },
    methods: {
      getData3() {
        request.get('update4').then(res => {
          this.genxi = res.data
        })
      },
      getData4() {
        request.get('update5').then(res => {
          this.rengqi = res.data
        })
      },
      getData5() {
        request.get('update6').then(res => {
          this.shouc = res.data
        })
      }
    },
    mounted() {
      this.getData3()
      this.getData4()
      this.getData5()
    }
  }
</script>
<style lang="scss" scoped>
  .list {
    background: #F5F5EE;
    width: 100%;
  }

  .list_update {
    background: #ffffff;
    margin: 5px 5px 5px 5px;

    li {
      border-bottom: 0.05rem solid #F5F5EE;
      display: flex;
      padding-left: 0.05rem;
      padding-right: 0.05rem;
      padding-bottom: 0.05rem;
    }
  }

  .comic-cover {
    width: 0.7rem;
    margin-right: 0.1rem;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .comic-info {
    flex: 1;
    min-width: 1px;
    text-align: left;

    h2 {
      color: #535252;
      font-size: 0.14rem;
      line-height: 150%;
      padding-top: 0.05rem;
      font-weight: bold;
    }

    p {
      font-size: 0.1rem;
      color: #969696;
      line-height: 0.2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
</style>