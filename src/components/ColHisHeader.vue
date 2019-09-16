<template>
  <div class="header">
    <div class="header-warp">
      <router-link to="/collect" class="collect">收藏</router-link>
      <router-link to="/history" class="history">历史</router-link>
      <i class="fa fa-times set" aria-hidden="true" @click="setDelete" v-if="flag"></i>
      <i class="fa fa-cog set" aria-hidden="true" @click="getDelete" v-else></i>
      <div class="deleted" v-show="flag">
        <div class="deleted-left">
          <i class="fa fa-check-square-o" aria-hidden="true"></i>
          <span>{{select}}</span>
        </div>
        <div class="deleted-right">
          <i class="fa fa-trash-o" aria-hidden="true"></i>
          <span>删除</span>
        </div>

      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'ColHisHeader',
    data: function () {
      return {
        flag: false,
        select: '全选',
        cancel: '取消全选'
      }
    },
    methods: {
      setDelete: function () {
        this.flag = false
      },
      getDelete: function () {
        this.flag = true
      }
    }

  }
</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .deleted {
    width: 100%;
    display: flex;
    height: 0.50rem;
    position: fixed;
    border-top: 1px solid #CCCCCC;
    bottom: 0;
    left: 0;
    color: orange;
    font-size: 0.14rem;
    line-height: 0.50rem;
    background: white;

    .deleted-left {
      width: 50%;
      border-right: 1px solid #CCCCCC;

      i {
        display: inline-block;
      }
    }

    .deleted-right {
      width: 50%;
    }
  }

  .header {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 0.12rem;
    text-align: center;
    color: #2c3e50;
    height: 0.34rem;
    position: relative;

    a {
      &.router-link-exact-active {
        color: orange;
        font-weight: 900;
        font-size: 0.14rem;
      }
    }

    .header-warp {
      width: 1.7rem;
      height: 0.34rem;
      display: flex;
      margin: 0 auto;
      justify-content: space-around;
      line-height: 0.34rem;
      color: #CCCCCC;
      font-size: 0.10rem;

      .collect {
        width: 0.85rem;
      }

      .history {
        width: 0.85rem;
      }

      .set {
        position: absolute;
        right: 0.1rem;
        top: 0.09rem;
        color: orange;
        font-size: 0.16rem;
      }
    }
  }
</style>