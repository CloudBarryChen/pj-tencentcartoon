import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerShow: true,
    titleShow: false,
    titleContent: ''
  },
  mutations: {
    headerShowHandler: function (stateObj, payload) {
      stateObj.headerShow = payload
    },
    titleShowHandler: function (stateObj, payload) {
      stateObj.titleShow = payload
    },
    titleContentHandler: function (stateObj, payload) {
      stateObj.titleContent = payload
    }
  },
  actions: {}
})
