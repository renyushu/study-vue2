/*
  该文件是整个项目的入口文件  
*/
//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
// import {hunhe, hunhe2} from './mixin'
//关闭生产提示
Vue.config.productionTip = false
// Vue.mixin(hunhe)
// Vue.mixin(hunhe2)

//创建vm
new Vue({
  render: h => h(App), //将app组件放入容器中
}).$mount('#app')
