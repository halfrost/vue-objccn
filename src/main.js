// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'
import Layout from './components/layout'
import * as uiv from 'uiv'
import hljs from 'highlight.js'
import VeeValidate from 'vee-validate'
// import cordova from './mobile-index'  // 打开此行代码的注释可以打 cordova 的包

Vue.use(uiv)
Vue.use(ElementUI)
Vue.use(hljs)
Vue.use(VeeValidate)

Vue.config.productionTip = false

hljs.initHighlightingOnLoad()

Vue.directive('hljs', el => {
  let blocks = el.querySelectorAll('pre code')
  Array.prototype.forEach.call(blocks, hljs.highlightBlock)
})

// cordova.onDeviceReady = () => {  // 打开此行代码的注释可以打 cordova 的包
  /* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<Layout/>',
  components: {
    Layout
  }
  //  render: h => h(App)
})
// }

// cordova.initialize() // 打开此行代码的注释可以打 cordova 的包
