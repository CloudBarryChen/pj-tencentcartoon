<template>
    <div>
      <div class="box">
        <section class="content">
          <h2 class="sub-title">
            <a href="#" class="tu1"><img src="../assets/images/me_02.png"></a>
            <a href="#" class="tu2" @click="getMore"><img src="../assets/images/more_03.png"></a>
          </h2>
          <ul class="anime-list">
            <li class="anime-item" v-for="(ele,index) in countentData" :key="index" @click="clickHandlerDirect(ele)">
              <router-link to="/detail"><img :src="ele.url"></router-link>
              <div class="anime-text">
                <strong>{{ ele.name }}</strong>
                <p class="desc-text">{{ ele.des}}</p>
              </div>
            </li>
          </ul>

        </section>
        <h2 class="sub-title">
          <a href="#" class="tu1"><img src="../assets/images/me_10.png"></a>
          <a href="#" class="tu2" @click="getMore"><img src="../assets/images/more_03.png"></a>
        </h2>
        <div class="cartoon">
          <a href="#"><img src="../assets/images/b02.jpg" ></a>
          <div class="text-list">
            <span>亚尔斯兰战记</span>
            <p>作者：荒川弘、田中芳树</p>
          </div>
        </div>
        <!--完结精品-->
        <h2 class="sub-title">
          <a href="#" class="tu1"><img src="../assets/images/me_06.png"></a>
          <a href="#" class="tu2" @click="getMore"><img src="../assets/images/more_03.png"></a>
        </h2>
        <ul class="anime-list">
          <li class="anime-item" v-for="(item,index) in threeData" :key="index">
            <a href="#"><img :src="item.Img"></a>
            <div class="anime-text">
              <strong>{{ item.name }}</strong>
              <p class="desc-text">{{ item.type}}</p>
            </div>
          </li>
        </ul>
          <!--第三条数据-->
        <h2 class="sub-title">
          <a href="#" class="tu1"><img src="../assets/images/me_12.png"></a>
          <a href="#" class="tu2" @click="getMore"><img src="../assets/images/more_03.png"></a>
        </h2>
        <ul class="anime-list">
          <li class="anime-item" v-for="(item,index) in twoTwoData" :key="index">
            <a href="#"><img :src="item.Img"></a>
            <div class="anime-text">
              <strong>{{ item.name }}</strong>
              <p class="desc-text">{{ item.type}}</p>
            </div>
          </li>
        </ul>
         <!--底部-->
            <div class="footer">
                  <i class="img-2">
                    <img src="../assets/images/tou_02.png">
                  </i>
            </div>
          <!--回顶部-->
          <a href="#" class="btn" ref="btn"><i class="fa fa-angle-up fa-3x" aria-hidden="true"></i></a>
      </div>
      <a href="#" class="anz"><img src="../assets/images/an.png"></a>
    </div>
</template>

<script>

import { countentData, twoData, threeData } from '../api/index.js'
export default {
  name: 'countent',
  data: function () {
    return {
      countentData: [],
      twoTwoData: [],
      threeData: []
    }
  },
  methods: {
    getDongman: function () { // 拿第一条数据
      var p2 = countentData()
      p2.then((response) => {
        if (response.status === 200) {
          this.countentData = response.data
          console.log(response.data)
        }
      })
    },
    getTwodata: function () { // 拿第二条数据
      var p3 = twoData()
      p3.then((response) => {
        if (response.status === 200) {
          this.twoTwoData = response.data
          console.log(response.data)
        }
      })
    },
    getThreedata: function () { // 拿第三条数据
      var p4 = threeData()
      p4.then((response) => {
        if (response.status === 200) {
          this.threeData = response.data
          console.log(response.data)
        }
      })
    },
    // clickHandlerDirect(currentItem){
    //   var id = currentItem.Id;
    //  // this.$router.push("/more/"+id)
    //   console.log(this.$refs.content);
    // },
    getMore: function () {
      this.$router.push('/more/23')
    },
    handScroll () {
      // 获取浏览器滚走的距离
      var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(top);
      if (top > 500) {
        this.$refs.btn.style.opacity = 1// 浏览器滚到一定距离元素显示
      } else {
        this.$refs.btn.style.opacity = 0// 浏览器滚到一定距离元素隐藏
      }
    }
  },

  mounted () {
    this.getDongman(),
    this.getTwodata(),
    this.getThreedata(),
    window.addEventListener('scroll', this.handScroll)// 监听一个window 滚动事件
  },

  destroyed () { // 当不在这个页面是，这个事件要销毁，不然会报错
    window.removeEventListener('scroll', this.handScroll)
  }

}
</script>

<style scoped lang="scss">
 @import "../assets/font-awesome-4.7.0/css/font-awesome.css";
  .box{
    background: #F5F5EE;
    width: 100%;
  }

  .sub-title{
    height: 0.34rem;
    padding: 0 0.085rem;
    display: flex;
    justify-content: space-between;
    margin-top: 0.0425rem;

  }

  .sub-title .tu1 img{
    height:0.34rem;
    width: 1.275rem;

  }
  .sub-title .tu2 img{
    height:0.2125rem;
    width: 0.51rem;
    margin-top:0.0425rem;
  }
  .anime-list{
    width: 100%;
    height:3.4563rem;
    margin: -0.1275rem 0 0 ;
  }

  .anime-item{
    width: 28%;
    margin-top:0.1589rem;
    margin-left:0.1279rem;
    height:1.5369rem ;

  }
  .anime-item img{
    height: 1.1945rem;
  }

  //副标题
  li{
    list-style: none;
  }

  .anime-list{
    display: flex;
    flex-wrap: wrap;//自动换行
    align-content:flex-start;// 换行后向上对齐
  }

  .anime-text{
    background: white;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:1;
    text-align: center;
    margin-top: -2px;

  }

  .anime-text strong{
   font-size: 0.119rem;
    color: #535252;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:1;

  }
  .desc-text{
    display: block;
    margin-bottom:0.0635rem;
    color: #969696;
    font-size:0.1002rem;
    white-space: nowrap;

  }
  //日本经典
  .cartoon{
    height: 2.1375rem;
    padding:0 0.0425rem;
    margin-top: 4px;
  }
  .cartoon img{
    height: 1.7775rem;
    width: 3.03rem;

  }

  .text-list{
    display: flex;
    justify-content: space-between;
    height:0.34rem;
    background: white;
    line-height: 0.34rem;
    width: 3.03rem;
    margin: 0 auto;
  }
  .text-list span{
    font-size: 16px;
    margin-left:0.1275rem;
  }
  .text-list p{
    color: #C5C5C5;
    margin-right:0.1275rem;
  }

  //完结精品

  //底部
  .footer{
    width: 100%;
    height: 0.595rem;
    position: relative;
    background: url("../assets/images/bto.png")no-repeat;
    background-size: 100% auto;
    background-position: center;
    margin-top: 0.025rem;
    margin-bottom:0.45rem;

  }

  .img-2 img{
    width: 0.6375rem;
    height: 0.5652rem;
    position: relative;
    left: -0.74rem;
  }

  .btn{
    position: fixed;
    bottom:0.7rem;
    right: 0.2rem;
    width: 0.3428rem;
    height: 0.3428rem;
    border: 1px solid #797878;
    background:white;
    opacity: 0;

  }

 .fa-angle-up:before {
   height: 0.3rem;
 }
 /*安装*/

  .anz img{
    height: 0.5375rem;
    z-index: 2;
    position: fixed;
    bottom: 0px;
    width: 100%;
    left: 0px;
  }
</style>
