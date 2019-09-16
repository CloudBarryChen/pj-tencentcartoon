<template>
  <div>
    <div class="nav-menu-box">
      <!-- 分类头 -->
      <div class="category-strong">
        <ul>
          <li v-for="(itme,index) in star" :key="index">
            <router-link to="/listAll">
              <strong> {{ itme.name }} </strong><small>{{ itme.key }}</small>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- 分类中 -->
      <div class="category-normal">
        <div class="category-normal-ul">
          <ul>
            <li v-for="(itme,index) in urt" :key="index">
              <router-link to="/listStt">
                <span> {{ itme.name }} </span><img :src="itme.imgUrl" alt="">
              </router-link>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>

</template>
<script>
  import request from '../../untils/axios'

  export default {

    data() {
      return {
        star: [],
        urt: []
      }
    },
    methods: {
      getData1() {
        request.get('/strong').then(res => {
          this.star = res.data
          console.log(res, 123)
        })
      },
      getData2() {
        request.get('/normal').then(res => {
          this.urt = res.data
          console.log(res, 123)
        })
      }
    },
    mounted() {
      this.getData1()
      this.getData2()
    }
  }
</script>
<style lang="scss" scoped>
  .nav-menu-box {
    height: 100%;
    width: 100%;
    background: #ccc;
  }

  .category-strong {
    height: 1.05rem;
    margin: 0 0.08rem;
    display: flex;

    ul {
      margin-top: 0.1rem;
      background-color: white;
      overflow: hidden;
      width: 100%;

      li {
        width: 50%;
        height: 0.5rem;
        float: left;
        line-height: 0.5rem;
        box-sizing: border-box;
        padding-left: 0.2rem;
        display: flex;
      }

      strong {
        color: #969696;
        font-size: 0.14rem;
        display: block;
        width: 0.3rem;
      }

      small {
        display: block;
        color: white;
        border-top-left-radius: 40%;
        border-bottom-left-radius: 40%;
        width: 0.30rem;
        height: 0.14rem;
        background-size: 100% 100%;
        font-size: 0.1rem;
        text-align: right;
        line-height: 0.14rem;
        box-sizing: border-box;
        padding-left: 0.04rem;
        background: #de8275;
        margin: -32px 0 0 32px;
      }
    }
  }

  .category-normal {
    margin-top: 0.1rem;
    background-color: #ffffff;
    overflow: hidden;

    ul {
      margin-top: 0.1rem;
      background-color: white;
      overflow: hidden;
      width: 100%;
    }

    li {
      width: 48%;
      float: left;
      margin: 0.05rem 0.02rem;
      position: relative;
    }

    span {
      color: #535252;
      font-size: 0.1rem;
      position: absolute;
      left: 16px;
      top: 38px;
    }

    img {
      width: 100%;
    }
  }
</style>