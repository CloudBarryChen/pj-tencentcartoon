<template>
  <div>
    <img src="../assets/logo_upice.png" alt="" srcset="">
    <p>
      <button class="loginBtn">一键登录</button>
    </p>
  </div>
</template>

<script>

export default {
  name: 'login',
  props: [''],
  data () {
    return {

    }
  },

  components: {},

  computed: {},

  beforeMount () {},

  mounted () {},

  methods: {},

  watch: {}

}

</script>
<style lang='scss' scoped>
.loginBtn{
  width: 2.65rem;
  height: 0.42rem;
  background: rgb(18, 183, 245);
  font-size: .18rem;
  color: white;
  border-radius: 0.04rem;
  margin: .12rem 0;
}
</style>
