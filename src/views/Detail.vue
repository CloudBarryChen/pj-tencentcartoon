<template>
  <div class="detail">
    <div class="container" v-for="(ele,index) in detailList2" :key="index">
      <!--//banner部分-->
      <div class="banner" >
        <div class="banner-img">
          <img :src="ele.img"
               alt="绝世战魂">
        </div>
        <div class="banner-infos">
          <ul >

            <li class="banner-infos-title">
              {{ele.title}}
              <span>{{ele.grade}}</span>
            </li>
            <li class="banner-infos-tags">
              <label>标签:</label>
              <span>{{ele.tag}}</span>
            </li>
            <li class="banner-infos-author">
              作者: &nbsp;{{ele.author}}
            </li>
            <li class="banner-infos-hot">
              人气:
              <span class="banner-infos-hot-number">
                  {{ele.hot}}
                </span>
            </li>
            <li class="banner-infos-yp">
              月票:
              <span class="banner-infos-yp-number">
                  {{ele.yp}}
                </span>
            </li>

          </ul>
        </div>
      </div>
      <!--选项卡切换-->
      <div class="nav">
        <mt-navbar v-model="selected" class="tabs">
          <mt-tab-item id="1">详情</mt-tab-item>
          <mt-tab-item id="2">目录</mt-tab-item>
          <mt-tab-item id="3">评论</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <div class="nav-detail">
              <div class="nav-detail-icon">
                <img src="https://i.52112.com/icon/jpg/256/20140906/417/37738.jpg" alt="">
              </div>
              <p class="nav-detail-text">
                {{ele.infos}}
              </p>
            </div>
            <div class="nav-list">
              <h2>骚年们都在看</h2>
              <div class="nav-list-container">
                <ul>
                  <li v-for="(item,index) in detailList" :key="index">
                    <img :src="item.img" alt="">
                    <h3>{{item.title}}</h3>
                    <p>{{item.infos}}</p>
                  </li>
                </ul>
              </div>

              <div class="detail-bottom">
                <div class="detail-bottom-img">
                  <img src="https://i.52112.com/icon/jpg/256/20190823/55189/2460939.jpg" alt="" class="img1">
                  <img src="https://i.52112.com/icon/jpg/256/20160419/1573/90602.jpg" alt="" class="img2">
                </div>
                <a href="http://localhost:8080/topic">
                  <button>
                    开始阅读
                  </button>
                </a>
              </div>
            </div>
          </mt-tab-container-item>

          <mt-tab-container-item id="2">
            <div class="project">
              <div class="project-info">
                <span>2019-09-10</span>
                <span>更新到14话</span>
              </div>
              <div class="project-number">
                <ul >

                  <li>
                    <a href="#">14</a>
                    <a href="#">13</a>
                    <a href="#">12</a>
                  </li>
                  <li>
                    <a href="#">11</a>
                    <a href="#">10</a>
                    <a href="#">9</a>
                  </li>
                  <li>
                    <a href="#">8</a>
                    <a href="#">7</a>
                    <a href="#">6</a>
                  </li>

                </ul>
                <div class="project-more">
                  <a href="#">
                    大人，查看更多目录
                  </a>
                </div>
              </div>
            </div>

            <div class="nav-list">
              <h2>骚年们都在看</h2>
              <div class="nav-list-container">
                <ul>
                  <li v-for="(item,index) in detailList" :key="index">
                    <img :src="item.img" alt="">
                    <h3>{{item.title}}</h3>
                    <p>{{item.infos}}</p>
                  </li>
                </ul>
              </div>

              <div class="detail-bottom">
                <div class="detail-bottom-img">
                  <img src="https://i.52112.com/icon/jpg/256/20190823/55189/2460939.jpg" alt="" class="img1">
                  <img src="https://i.52112.com/icon/jpg/256/20160419/1573/90602.jpg" alt="" class="img2">
                </div>
                <a href="http://localhost:8080/topic">
                  <button>
                    开始阅读
                  </button>
                </a>
              </div>
            </div>

          </mt-tab-container-item>

          <mt-tab-container-item id="3">
            <div class="detail-comment">
              <div class="detail-comment-list">
                <div class="detail-comment-list-nomore">
                  客官，人家已经没有那个了啦~~
                </div>
              </div>
            </div>

            <div class=" detail-comment-bottom">
              <div class="detail-comment-bottom-ss">
                <a href="#">
                  我来说两句
                </a>
              </div>
            </div>
          </mt-tab-container-item>

        </mt-tab-container>
      </div>
    </div>
  </div>
</template>

<script>
// 引入接口
import { getDetailList } from '../api/index.js'
import { getDetailList2 } from '../api/index.js'
// 引入vue
import Vue from 'vue'
// 引入tabbar
import { Tabbar, TabItem } from 'mint-ui'

Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)

export default {
  name: 'Details',
  data: function () {
    return {
      selected: '1',
      detailList: [],
      detailList2: []
    }
  },
  methods: {
    dataList: function () {
      getDetailList().then((response) => {
        // console.log(response.data)
        if (response.status === 200) {
          this.detailList = response.data
        }
      })
    },
    datalist2: function () {
      getDetailList2().then((response) => {
        // console.log(response.data)
        if (response.status === 200) {
          this.detailList2 = response.data
        }
      })
    }
  },
  mounted () {
    this.dataList()
    this.datalist2()
  }
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  ul, li {
    list-style: none;
  }

  .detail {
    width: 100%;
    height: 100%;
  }

  .container {
    width: 100%;
    height: 100%;
  }

  .banner {
    width: 2.6rem;
    height: 1.7rem;
    display: flex;
    background-color: #ccc;
    padding: 0 .3rem;
  }

  .banner-img img {
    width: 1.105rem;
    height: 1.4875rem;
    margin-top: .2125rem;
  }

  .banner-infos {
    width: 1.4661rem;
    height: 1.4875rem;
    margin-top: .2125rem;
    margin-left: .14rem;
  }

  .banner-infos-title {
    padding-top: .22rem;
    line-height: .17rem;
    font-size: .17rem;
    color: #fff;
  }

  .banner-infos-title span {
    font-size: .14rem;
    background: #d97e5c;
    border-radius: 50%;
  }

  .banner-infos-tags {
    height: .14rem;
    padding-top: .15rem;
  }

  .banner-infos-tags label {
    height: .14rem;
    font-size: .12rem;
    color: #fff;
  }

  .banner-infos-tags span {
    height: .12rem;
    font-size: .12rem;
    padding-left: .08rem;
    color: #fff;
  }

  .banner-infos-author {
    height: .12rem;
    padding-top: .08rem;
    font-size: .12rem;
    color: #fff;
  }

  .banner-infos-hot {
    color: #fff;
    padding-top: .08rem;
    height: .12rem;
    font-size: .12rem;
  }

  .banner-infos-hot span {
    color: #fef886;
    padding-left: .05rem;
  }

  .banner-infos-yp {
    color: #fff;
    padding-top: .08rem;
    height: .12rem;
    font-size: .12rem;
  }

  .banner-infos-yp span {
    color: #fef886;
    padding-left: .05rem;
  }
  /*//切换*/
  .nav{
    width: 100%;
    height: 100%;
  }
  .tabs{
    display: flex;
    width : 100%;
    height: 0.382rem;
    border-bottom: 1px solid #ccc;
  }
  .tab mt-tab-item{
    width: 33%;
  }
  .nav-detail{
    width: 3.2rem;
    height: 1.2725rem;
  }
  .nav-detail-icon{
    width: 3.2rem;
    height: .425rem;
    text-align: center;
  }
  .nav-detail-icon img{
    margin-top: .15rem;
    height: .2rem;
    color: #CCCCCC;
  }
  .nav-detail-text{
    width: 2.775rem;
    height: 0.7rem;
    margin: 0 auto;
    color: #535252;
    font-size: .12rem;
    line-height: .18rem;
    padding-bottom: .15rem;
  }
  /*图片列表*/
  .nav-list{
    width: 3.2rem;
    height: 2.5rem;
    padding-top: .15rem;
  }
  .nav-list h2{
    height: .1rem;
    padding-bottom: .15rem;
    padding-left: .15rem;
    color:#969696;
    font-size: .12rem;
  }
  .nav-list-container{
    width: 100%;
    height: 1.58rem;
    display: flex;
  }
  .nav-list-container ul{
    width: 100%;
    height: 1.58rem;
    display: flex;
  }
  .nav-list-container ul li{
    width: 33%;
    text-align: center;
  }
  .nav-list-container ul li img{
    width: .8925rem;
    height: 1.19rem;
  }
  .nav-list-container ul li h3{
    color: #535252;
    font-size: .12rem;
    font-weight: bold;
  }
  .nav-list-container ul li p{
    color: #969696;
    font-size: .12rem;
  }
  /*底部*/
  .detail-bottom{
    width: 100%;
    height: .5525rem;
    margin-top: .15rem;
    display: flex;
    border-top: 1px solid #ccc;
  }
  .detail-bottom button{
    margin-right: .15rem;
    width: 1.89rem;
    height: .3825rem;
    background: #ff9a6a;
    color: #fff;
    border: 0;
    font-size: .18rem;
    font-weight: bold;
    margin-top: .05rem;
  }
  .detail-bottom-img{
    width: .9347rem;
    height: .2294rem;
    margin-right: .2rem;
    display: flex;
    margin-top: .2rem;
  }
  .img1{
    width: .2rem;
    height: .2rem;
    margin-left: .22rem;
  }
  .img2{
    width: .2rem;
    height: .2rem;
    margin-left: .22rem;
  }
  /*目录css*/
  .project{
    width: 100%;
    height: 2.4163rem;
  }
  .project-info{
    width: 2.9441rem;
    height: .14rem;
    padding-top: .15rem;
    margin: 0 auto;
  }
  .project-info span{
    color: #C5C5C5;
    font-size: .12rem;
  }
  .project-number{
    margin-top: .05rem;
    width: 100%;
    height: 2.4613rem;
  }
  .project-number ul{
    height: 1.5483rem;
  }
  .project-number li{
    width: 100%;
    height: .3825rem;
    display: flex;
    margin-bottom: 4%;
  }
  .project-number li a{
    height: .3825rem;
    width: 28%;
    margin-left: 4%;
    margin-bottom: 4%;
    border: 1px solid #c5c5c5;
    text-align: center;
    justify-items: center;
    font-size: .16rem;
    line-height: .3825rem;
  }
  .project-more{
    width: 92%;
    height: .3875rem;
    margin: 0 auto;
    text-align: center;
    margin-bottom: .15rem;
    border: 1px solid #c5c5c5;
  }
  .project-more a{
    font-size: .16rem;
    line-height: .40rem;

  }
  /*评论*/
  .detail-comment{
    width: 100%;
    height: 1.638rem;
    margin-top: .2rem;
    margin-bottom: .6rem;
  }
  .detail-comment-list{
    width: 100%;
    height: 1.638rem;
  }
  .detail-comment-list-nomore{
    margin-top: .1rem;
    width: 2.945rem;
    height: .12rem;
    margin: 0 auto;
    text-align: center;
    color: #9a9a9a;
  }
  .detail-comment-bottom{
    width: 100%;
    height: .5525rem;
    background-color: #F5F5EE;
    line-height: .5525rem;
    padding-top: .1rem;

  }
  .detail-comment-bottom-ss{
    width: 3.0375rem;
    height: .343rem;
    border: 1px solid #c5c5c5;
    border-radius: .2rem;
    background: #fff;
    margin: 0 auto;
    text-align: center;
    line-height: .343rem;
  }
  .detail-comment-bottom-ss a{
    color: #c5c5c5;
  }
</style>
