// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// ajax请求
//jquery
import axios from 'axios'

axios.get('/restapi/shopping/openapi/entries?latitude=22.54286&longitude=114.059563&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template')
.then((response)=>{
  console.log('请求成功了')
})
.catch((error)=>{
  console.log("请求失败了")
})