<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img src="../../images/g1.gif"/>
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../images/J1.jpeg"/>
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../images/J3.jpeg"/>
            </mt-swipe-item>
        </mt-swipe>
        <!--九宫格到六宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-home"></span>
                <div class="mui-media-body">首页</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                <div class="mui-media-body">邮箱</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-chatbubble"></span>
                <div class="mui-media-body">消息</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-location"></span>
                <div class="mui-media-body">定位</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-search"></span>
                <div class="mui-media-body">搜索</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-phone"></span>
                <div class="mui-media-body">手机端</div></a></li>

        </ul>
    </div>
</template>

<script>
  
</script>


<style  scoped>
    img{
        width: 100%;
        height: 100%;
    }
.mint-swipe{
    height: 200px;


}
.mint-swipe-item{
     background-color: #4cd964;
 }
.mint-swipe-item:nth-child(2){
    background-color: #e08504;
}
.mui-grid-view.mui-grid-9 .mui-media{
    background-color: #fff;
    border: none;
}
</style>