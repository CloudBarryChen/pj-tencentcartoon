<template>
     <div class="box">
         <ul class="list-box">
            <li class="list-li" v-for="ele in dongmanData">
              <a href="#"><img :src=" ele.url"></a>
              <div class="list-right">
                  <strong>{{ ele.name }}</strong>
                  <p>{{ ele.gengx }}</p>
                  <p>{{ ele.type}}</p>
                  <p class="more-text">{{ ele.des}}</p>
              </div>
            </li>
         </ul>
       <a href="#" class="btn" ref="btn"><i class="fa fa-angle-up fa-3x" aria-hidden="true"></i></a>
     </div>
</template>

<script>
import { getDongmandata } from '../api/index.js'

export default {
  name: 'More-list',
  data: function () {
    return {
      dongmanData: []
    }
  },
  methods: {
    getMorelist: function () {
      var p1 = getDongmandata()
      p1.then((response) => {
        if (response.status === 200) {
          this.dongmanData = response.data
          console.log(response.data)
        }
      })
    },
    getHeader () {
      var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(top);
      if (top > 200) {
        this.$refs.btn.style.opacity = 1
      } else {
        this.$refs.btn.style.opacity = 0
      }
    }
  },
  mounted () {
    this.getMorelist()
    window.addEventListener('scroll', this.getHeader)
  },
  destroyed () { // 当不在这个页面是，这个事件要销毁，不然会报错
    window.removeEventListener('scroll', this.getHeader)
  }
}
</script>

<style scoped lang="scss">
  .list-box{
    padding-left: 0.042rem;
    padding-right: 0.042rem;
    padding-bottom: 0.042rem;
    box-sizing: border-box;
  }
  .list-li{
    height: 0.8797rem;
    display: flex;
    overflow: hidden;
    text-align: left;
    border-bottom:4px solid #F5F5EE;
  }
  .list-right{
     padding-left: 0.05rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .list-li strong{
    font-size: 0.136rem;
    padding-top: 0.0425rem;
  }
  .list-li img{
    height: 0.7947rem;
    padding: 0.042rem;
  }

  .list-li p{
    color: #969696;
    line-height:0.18rem;
    font-size: 0.102rem;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:1;
    overflow: hidden;
  }

  .btn{
    position: fixed;
    bottom:0.4rem;
    right: 0.2rem;
    width: 0.30rem;
    height: 0.30rem;
    border: 1px solid #797878;
    background:white;
    opacity: 0;

  }

</style>
