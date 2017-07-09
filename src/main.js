import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
