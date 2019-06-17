// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 在入口文件中引入基本样式
import 'styles/reset.css'
import 'styles/border.css'
import FastClick from 'fastclick'
// import 'iconfonts/iconfont.css'

Vue.config.productionTip = false
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
