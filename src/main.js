import Vue from 'vue'

import VueRouter from 'vue-router'
import axios from 'axios'
// import VueAxios from 'axios'S
import App from './App.vue'
import taobao_gxg from './components/taobao_gxg'
import HelloWorld from "./components/HelloWorld"
import myjob from "./components/Myjob"


Vue.use(VueRouter)
// Vue.use(VueAxios, axios)
Vue.prototype.$http = axios
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [

    {
      path: '/myjob/:id', component: myjob
    },
    {
      path: '/taobao_gxg', component: taobao_gxg
    }






  ]

})

new Vue({
  router,
  el: '#app',
  render: h => h(App),
}).$mount('#app')
