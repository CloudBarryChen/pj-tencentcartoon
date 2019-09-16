import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'

import { Tab, Tabs } from 'vant'
import 'vant/lib/index.css'

// 1 引入MintUi
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)
Vue.use(Tab).use(Tabs)

Vue.config.productionTip = false
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.2 + 'px'

new Vue({
  Tab,
  Tabs,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
