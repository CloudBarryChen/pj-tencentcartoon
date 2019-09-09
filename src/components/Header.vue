<template>
  <div>
    <div class="header" id="header">
      <div class="title"><h1>腾讯动漫</h1></div>
      <div class="left">
        <router-link class="search" to="/search"></router-link>
        <a href="#" class="menu" @click="isNavShow"></a>
      </div>

    </div>
    <div class="nav" v-if="navShow">
      <ul class="clearfix">
        <li>
          <router-link to="">首页</router-link>
        </li>
        <li>
          <router-link to="">收藏</router-link>
        </li>
        <li>
          <router-link to="">历史</router-link>
        </li>
        <li>
          <router-link to="">分类</router-link>
        </li>
        <li>
          <router-link to="">排行</router-link>
        </li>
        <li>
          <router-link to="">反馈</router-link>
        </li>
      </ul>
      <a href="#">我的地盘</a>
    </div>


  </div>
</template>

<script>


  export default {
    name: "Header",
    data: function () {
      return {
        navShow: false,
      }
    },
    methods: {
      isNavShow: function () {
        if (this.navShow == false) {
          this.navShow = true;
        } else {
          this.navShow = false;
        }
      },
    },
  }
</script>

<style scoped lang="scss">
  .header {
    height: .425rem;
    background: white;

  }

  .nav {
    height: 1.7rem;
    z-index: 152;
    background-color: #F5F5EE;
    padding-bottom: 0.75rem;
    border-bottom: 0.025rem solid #ff9a6a;
    text-align: center;
    box-sizing: border-box;
    position: absolute;
    top: .425rem;
    left: 0;
    width: 100%;

    ul {
      display: flex;

      li {
        width: 33%;
      }
    }
  }

  .title {
    float: left;
  }

  .left {
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .search {

    background: url("../assets/index.png") no-repeat -1.415rem -1.065rem;
    background-size: 2.96rem 1.4rem;
    width: .26rem;
    height: .26rem;
  }

  .menu {

    background: url("../assets/index.png") no-repeat -1.095rem -1.065rem;
    background-size: 2.96rem 1.4rem;
    width: .26rem;
    height: .26rem;

  }
</style>
