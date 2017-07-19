// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import router from './router'
<<<<<<< HEAD
import 'common/stylus/index.styl'
=======
import VueLazyload from 'vue-lazyload'

import 'common/stylus/index.styl'
 
>>>>>>> 2017/7/19

/* 解决300毫秒延迟问题 */
fastclick.attach(document.body)

<<<<<<< HEAD
/* eslint-disable no-new */
new Vue({
  el: '#app', 
  render: h => h(App),
  router
=======
Vue.use(VueLazyload,{
	loading:require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app', 
  router,
  render: h => h(App)
  
>>>>>>> 2017/7/19
})
