<template>
    <div>
      <h1>
        小说页
      </h1>
      <ul  v-for="(ele,index) in list" :key="index">
        <li>
          <img :src="ele.imgUrl" alt="">
          <h2>{{ele.course_name}}</h2>
          <p>{{ele.autor}}</p>
        </li>
        <div class="click" @click="localStopd(ele)">
          <h2>点击保存本地存储</h2>
        </div>
      </ul>
    </div>
</template>

<script>
import { getEqualData } from '../api/index.js'
/* const getEqualData = () => import('../api/index.js') */
export default {
  name: 'aaa',
  data: function () {
    return {
      list: [],
      flag: false
    }
  },
  methods: {
    a () {
      var id = this.$route.params.id
      getEqualData(id).then((res) => {
        /* console.log(res); */
        if (res.status == 200) {
          this.list.push(res.data[0])
          /* console.log(res.data[0], 656565) */
        }
      })
    },
    // 本地存储
    localStopd (currentItem) {
      if (!this.flag) {
        // this.list.push(1);
        localStorage.setItem('time', JSON.stringify(this.list))
        this.flag = true
      }
    }
  },
  mounted: function () {
    this.a()
  },
  created: function () {
    /* var id = this.$route.params.id; */
    /* console.log(id + '是是是是'); */
    // this.list = JSON.parse(localStorage.getItem("time"))||"[]";
    if (localStorage.getItem('time')) {
      this.list = JSON.parse(localStorage.getItem('time'))
    } else {
      this.list = []
    }
    /* console.log(this.list) */
    /* console.log(1); */
  },
  watch: {

  }
}
</script>

<style scoped lang="scss">
  .click{
    border: 1px solid red;
    background: green;
  }
</style>
