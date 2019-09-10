import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'

// 1 引入MintUi
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

Vue.config.productionTip = false
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.2 + 'px'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
