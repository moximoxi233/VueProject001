//入口文件

import Vue from 'vue'
//导入路由的包
import  VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)
//导入vue-resource
import  VueReasource from  'vue-resource'
//安装
Vue.use(VueReasource)

//导入 mui样式
import  './lib/mui/css/mui.min.css'
import  './lib/mui/css/icons-extra.css'


//按需导入 MintUI中的组件
import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)


//导入router.js模块
import router  from './router.js'


//导入app根组件
import app from './app.vue'
var vm=new Vue({
    el:'#app',
    render:c => c(app),
    router,
})