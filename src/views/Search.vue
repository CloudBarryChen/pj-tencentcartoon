<template>
  <div>
    <div class="wrap">
      <router-link to="/" class="back">
        <i class="fa fa-angle-left"></i>
      </router-link>
      <form action="/">
        <div class="holder">
          <i :class="{move:porAni}"></i>
          <span v-if="holderShow">漫画名|作者</span>
        </div>
        <input
          type="search"
          class="search"
          @input="getSearch"
          @focus="onSearch"
          @blur="onCancel"
          v-model="keyword"
        />
      </form>
      <button class="btnSc">搜索</button>
    </div>
    <div class="seaLis" v-if="searchRes.length">
      <ul>
        <li v-for="(val,index) in searchRes" :key="index">
          <router-link to>{{val.title}}</router-link>
        </li>
      </ul>
    </div>
    <div class="hot">
      <div class="up">
        <div></div>
        <div></div>
      </div>
      <div class="down">
        <ul>
          <li v-for="(val,index) in hot" :key="index">
            <router-link :to="val.url">{{val.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import path from 'path'

export default {
  name: 'Search',
  data: function () {
    return {
      holderShow: true,
      porAni: false,
      hot: {},
      keyword: '',
      searchRes: []
    }
  },
  methods: {
    onSearch: function () {
      // console.log("onSearch");
      this.holderShow = false
      this.porAni = true
    },
    onCancel: function () {
      // console.log("onCancel");
      if (!this.keyword) {
        this.holderShow = true
        this.porAni = false
      }
    },
    getHots: function () {
      var url = path.resolve('json', 'testhot.json')
      Axios.get(url).then(res => {
        // console.log(res);
        this.hot = res.data.data
      })
    },
    getSearch: function () {
      var url = '/smart/search/smart?t=1568095291943&word=' + this.keyword
      Axios.get(url).then(res => {
        // console.log(res);
        this.searchRes = res.data.data || []
        // console.log(this.searchRes);
      })
    },
    isHeaderShow: function (arg) {
      this.$store.commit('headerShowHandler', arg)
    }
  },
  created () {},
  mounted () {
    this.getHots()
    this.isHeaderShow(false)
  },
  destroyed () {
    this.isHeaderShow(true)
  }
}
</script>

<style scoped lang="scss">
.seaLis {
  ul {
    padding: 0 0.1rem;

    li {
      width: 100%;
      height: 0.425rem;
      text-align: left;
      border-bottom: 0.01rem solid #ccc;
      font-size: 0.16rem;
      line-height: 0.425rem;

      a {
        color: #aaa;
      }
    }
  }
}

.hot {
  width: 100%;
  height: 100vh;
  background: #f5f5ee;

  .up {
    height: 0.52rem;
    margin: 0 0.1rem;
    box-sizing: border-box;
    border-bottom: 0.01rem solid #bbb;
    display: flex;
    justify-content: left;
    align-items: center;

    div {
      &:nth-of-type(1) {
        width: 0.32rem;
        height: 0.25rem;
        background: url("../assets/sc_img_search.png") no-repeat -0rem -0.283rem;
        background-size: 0.837rem 0.701rem;
      }

      &:nth-of-type(2) {
        width: 0.87rem;
        height: 0.25rem;
        background: url("../assets/sc_img_search.png") no-repeat -0rem -0rem;
        background-size: 0.837rem 0.701rem;
      }
    }
  }

  .down {
    padding: 0.1rem;
    box-sizing: border-box;

    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        margin: 0.05rem;

        a {
          height: 0.4rem;
          line-height: 0.4rem;
          border: 1px solid #c5c5c5;
          background: white;
          border-radius: 0.4rem;
          font-size: 0.12rem;
          padding: 0.14rem;
        }
      }
    }
  }
}

.move {
  transition: all 0.3s;
  transform: translate(-0.75rem, 0);
}

.wrap {
  height: 0.425rem;
  background: #ff9a6a;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  .holder {
    position: absolute;
    top: 0.11rem;
    left: 50%;
    margin-left: -0.53rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    i {
      display: block;
      width: 0.2rem;
      height: 0.2rem;
      background: url("../assets/sc_img_search.png") no-repeat -0.74rem -0.345rem;
      background-size: 1.02rem 0.85rem;
    }

    span {
      font-size: 0.12rem;
      color: #bbb;
    }
  }

  .back {
    width: 0.23rem;
    height: 0.23rem;

    i {
      color: white;
      font-size: 0.23rem;
      line-height: 0.23rem;
    }
  }

  .btnSc {
    height: 0.33rem;
    width: 0.425rem;
    border: 0;
    background: none;
    color: white;
    font-size: 0.14rem;
  }

  .search {
    height: 0.28rem;
    width: 2.4rem;
    border: 0;
    border-radius: 0.02rem;
    font-size: 0.14rem;
    padding-left: 0.2rem;
    box-sizing: border-box;
  }
}
</style>
