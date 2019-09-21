<template>
  <div class="wrap">
    <button @click="goback" class="back">
      <i class="fa fa-angle-left"></i>
    </button>
    <span>{{ $store.state.titleContent }}</span>
    <span>{{ $route.name }}</span>
  </div>
</template>

<script>
export default {
  name: '',
  props: [''],
  data () {
    return {}
  },

  components: {},

  computed: {},

  beforeMount () {},

  mounted () {},

  methods: {
    goback: function () {
      this.$router.go(-1)
    }
  },

  watch: {}
}
</script>
<style lang='scss' scoped>
.wrap {
  float: left;
  .back {
    width: 0.23rem;
    height: 0.23rem;
    margin: 0 .04rem 0 ;
    i {
      color: #ff9a6a;
      font-size: 0.23rem;
      line-height: 0.23rem;
    }
  }
  span{
    font-size: .18rem;
    line-height: .23rem;
  }
}
</style>
