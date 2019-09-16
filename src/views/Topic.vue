<template>
    <div class="topic-wrap">
      <div class="topic-main">
        <h1 v-if="flag"><a href="http://localhost:8080/detail">返回上一页</a></h1>
        <h3 v-if="flag"><a href="http://localhost:8080/detail">加载下一页</a></h3>
        <h2 v-else><a href="http://localhost:8080/detail">点击加载上一章节</a></h2>
        <ul class="topic-main-list" @click="clickHandler">
          <li><img src="https://manhua.qpic.cn/manhua_detail/0/02_11_02_936bce9715d8bfec04d75d5c9eb8f0f0_1567393369601.jpg/800" alt=""></li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_02_59058aed2b9d4f2df71f8e5d453ec501_1567393370068.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_02_f89de62e97606ffed7d005e7bb766476_1567393371061.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_02_930294f87f7d1ed2d0886574df5b2d11_1567393371974.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_02_496501c716025ec9684613686565995b_1567393372953.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_02_281cd69b053a39877a4886efe05ff6c2_1567393373991.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_02_ce87ade9e5132ad4049594e0a237afe9_1567393374993.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_02_f0a60b796c9c898fa249baaf6cdfe44f_1567393376076.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_02_1fa6e618af1375e6b0eda4a9e8b84a37_1567393377093.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_02_6ae54832fa20c79ed1953beeefe40664_1567393378070.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_02_3583f4c8c5ec889f78d2bf006f8d63eb_1567393379111.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_987c852427ec1332c21ce7a09ce4b9c2_1567393380124.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_d73bbe72d8735d7a4df8c176424ce3b2_1567393381446.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_eb4879f5ad2b8e2cfc4ea7bbde697c0a_1567393382110.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_70e9f50c03f999460a3f2225d8c944f1_1567393383041.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_28ab473c8c196d67e9d9123cc8b41855_1567393384011.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_2b7a22e8749e16a0806f4f71887b0c22_1567393385090.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_e0c7a3d4c9bd327b80d797428f4cf4d6_1567393386087.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_29cad221fea25ac1c315acab7fb8b35b_1567393387039.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_981f5377a511582cc1a02324d41648a8_1567393387973.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_c14e4065560cb6893fdce05c90f5484c_1567393389045.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_9935eea613b25224386be1b0b94a131b_1567393390099.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_0ce95ba9a887dcd9a2ec0b05844a11cf_1567393391082.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_22df7e8b93880f31579c59d5f529833d_1567393392075.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_cdab0dd4de6fe6331b38daa4d5060f18_1567393393085.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_6beefda6e41bf5375c351a699283fbe0_1567393394047.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_434a3cd9510913093893116b7489f6cb_1567393395042.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_7857d322b59b29d55f39454b2a2b94d3_1567393396082.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_55cb42b7e2b1745e2470520cc8bbfb42_1567393397052.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_4f5406766affc8d92e16df73e059358a_1567393398021.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_9d996b0d5084fe3e4e8394654c5a1a99_1567393399097.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_0baeac6ca6fc174e608bee868820fe8b_1567393400103.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_d567703bcf04456c8b6359f6866659c2_1567393401109.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_d9636f1c4942f462f9e7775305e63127_1567393401976.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_0b512effaf61753e5cfa9a906f95a63c_1567393403098.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_9a921b734956ffdca0f324c1bd86cbf2_1567393404122.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_a2e0929eaa269a8f4adb74c4d7230298_1567393405089.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_564df761a9232684e47dd089d0d2313f_1567393406086.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_1d4b5d35888a4168766a8f6fe0a4b697_1567393407083.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_e544a5e281651128d859ef5fe0b0b943_1567393408089.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_993ce3071a9d0bd86aaa96b0db253e65_1567393409093.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_2607e6e8a3bb98f7e0c572039199c98a_1567393410416.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_ad419dc8a27f23dab9bb70004436b779_1567393411105.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_668f8af9d43bdf50364464b333b0a906_1567393412023.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_973f40e5f5a673137238895afa47ab18_1567393413077.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_079d0ed03690115c14997b929cfbb60a_1567393414073.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_b018d8650cb65b93be353de985e43193_1567393415037.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_48c2f0722ac14a06f19f4c6f66ccaf8e_1567393415985.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_24fd76e2bc03972304b9300a04438c50_1567393417076.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_d84d532cdefb62e0a4cb9a585d1881c8_1567393418118.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_d802c48d6d60269fee74d30c5f2cbc54_1567393419050.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_28a6c4928100f1d1e1d6c5a3fe6673db_1567393420024.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_a8d7157bcd661ff819d0832788d72043_1567393421081.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_b2bf89fd7ca8e4063a0b6d9d886994c7_1567393422063.jpg/800" alt="">
          </li>
          <li>
            <img src="https://manhua.qpic.cn/manhua_detail/0/02_11_03_637cc4075032c9304b46db22ef7e938e_1567393423055.jpg/800" alt="">
          </li>
        </ul>

        <h2><a href="http://localhost:8080/detail">点击加载下一章节</a></h2>

      </div>
    </div>
</template>

<script>
export default {
  name: 'topic',
  data: function () {
    return {
      flag: false
    }
  },
  methods: {
    clickHandler () {
      // alert(1);
      var _this = this
      this.flag = true
      var timer = null
      timer = setInterval(() => {
        _this.flag = false
      }, 3000)
      clearInterval(function () {
        timer = null
      })
      var height = document.documentElement.clientHeight
      console.log(height)
    }
  }

}
</script>

<style scoped>
  h1{
    background: rgba(40,40,40,0.95);
    color : #969696;
    width: 100%;
    line-height: .3825rem;
    height: .3825rem;
    font-size: .16rem;
    text-align: center;
    position: fixed;
    top:0;
    left: 0;
   }
  h3{
    font-size: .16rem;
    width: 100%;
    background: #000;
    opacity: .5;
    position:fixed;
    bottom:0;
    line-height: .3825rem;
    height: .3825rem;
    text-align: center;
  }
  ul li{
    list-style: none;
  }
  .topic-wrap{
    width: 100%;
    height: 100%;
  }
  .topic-main{
    width: 100%;
    height: 100%;
  }
  .topic-main h2{
    width: 100%;
    height: .3825rem;
    background: #ff9a6a;
    line-height: .3825rem;
    text-align: center;
  }
  .topic-main h2 a{
    color: #fff;
    font-size: .15rem;
  }
  .topic-main-list{
    width: 100%;
  }
  .topic-main-list li{
    width: 100%;
    height: 1.0239rem;
  }
  .topic-main-list img{
    width: 100%;
    height: 1.0239rem;
  }
</style>
