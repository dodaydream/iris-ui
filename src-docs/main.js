import Vue from 'vue'
import App from './App'
import IrisUI from 'iris-ui'

Vue.config.productionTip = false

Vue.use(IrisUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
