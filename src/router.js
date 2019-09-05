import VueRouter from 'vue-router'
//导入路由组件
import homeContainer from './components/tabbar/homeContainer.vue'
import menberContainer from './components/tabbar/menmberContainer.vue'
import cartContainer from './components/tabbar/cartContainer.vue'
import searchContainer from './components/tabbar/searchContainer.vue'

//创建路由
var router=new VueRouter({
    routes:[
    //配置路由规则
        {path:'/',redirect:'/home'},
        {path:'/home',component:homeContainer},
        {path:'/menber',component:menberContainer},
        {path:'/cart',component:cartContainer},
        {path:'/search',component:searchContainer}
    ],
    linkActiveClass:'mui-active',//覆盖默认的路由高亮的类，==默认的类叫做router-link-active

})

//将路由对象暴露出去
export default router