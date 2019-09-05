<template>
    <div class="app-container">
        <!--header区域-->
        <mt-header fixed title="vue项目001"></mt-header>
        <!--中间的 路由router-view区域-->
       <transition>
           <router-view></router-view>
       </transition>
        <!--底部 tabbar区域-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item " to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/menber">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">VIP</span>
            </router-link>
            <router-link class="mui-tab-item" to="/cart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">2</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
        <!--<h1>这是一个APP组件</h1>-->
    </div>
</template>

<script>

</script>

<style acoped>
 .app-container{
     padding-top: 40px;
     overflow-x: hidden;
 }
    .v-enter,
    .v-leave-to{
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }
    .v-enter-active,
    .v-leave-active{
    transition: all 0.4s ease;
    }
</style>
