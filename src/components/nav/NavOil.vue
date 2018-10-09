<template>
	<div class="fruit-container">
    <!--第一部分：搜索栏-->
    <div class="search">
      <img src="../../img/home-icon.png">
      <div class="mui-input-row">
        <input type="text" class="mui-input-clear">
        <span class="mui-icon mui-icon-search"></span>   
        <span class="mui-word-search">搜索</span>
      </div>
    </div>
    <!--第二层：导航栏-->
    <div id="slider" class="mui-slider mui-fullscreen">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <router-link class="mui-control-item" href="#item1mobile" data-wid="tab-top-subpage-1.html" to="/home">
            <span>热卖</span>
          </router-link>
          <router-link to="/home/navveg" class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
            <span>蔬菜</span>
          </router-link>
          <router-link to="/home/navfruit" class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
            <span>水果</span>
          </router-link>
          <router-link to="/home/navfood" class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
            <span>轻食</span>
          </router-link>
          <router-link to="/home/navoil" class="mui-control-item  mui-active" href="#item5mobile  mui-active" data-wid="tab-top-subpage-5.html">
            <span>粮油</span>
          </router-link>
          <a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
              <span>乳品</span>
          </a>
          <a class="mui-control-item" href="#item7mobile" data-wid="tab-top-subpage-7.html">
              <span>零食</span>
          </a>
          <a class="mui-control-item" href="#item8mobile" data-wid="tab-top-subpage-8.html">
              <span>酒饮</span>
          </a>
          <a class="mui-control-item" href="#item9mobile" data-wid="tab-top-subpage-9.html">
              <span>熟食</span>
          </a>
        </div>
      </div>
    </div>
    <!--第三层：轮播图-->
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="../../img/nav-bn1.png" style="width:375px;">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../img/nav-bn2.png" style="width:375px;">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../img/nav-bn3.jpg" style="width:375px;">
      </mt-swipe-item>
    </mt-swipe>
    <div class="fruit-ad">
      <img src="../../img/nav1.jpg" >
    </div>
    <!--第四层：商品列表-->
    <ul class="mui-table-view"> 
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-pull-left" src="../../img/nav3.jpg">
            <div class="mui-media-body">
              南非水橙170-260g*2个
              <p class='mui-ellipsis'>轻点咬 小心橙汁溅一身</p>
            </div>
            <div class="price">
              <span class="now">￥4.9</span>
              <span class="old">￥7.9</span>
              <div class="cart">
              <img src="../../img/cart.png">
              </div>
            </div>           
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-pull-left" src="../../img/nav4.jpg">
            <div class="mui-media-body">
              泰国香水椰青800g*2个
              <p class='mui-ellipsis'>萨瓦迪卡 欢迎大家 来吃我啦</p>
            </div>
            <div class="price">
              <span class="now">￥15.9</span>
              <span class="old">￥29.9</span>
              <div class="cart">
              <img src="../../img/cart.png">
              </div>
            </div>           
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-pull-left" src="../../img/nav5.jpg">
            <div class="mui-media-body">
              广西百香果50-70g*5个
              <p class='mui-ellipsis'>仿佛能尝到一百种果香味儿</p>
            </div>
            <div class="price">
              <span class="now">￥10.8</span>
              <span class="old">￥11.9</span>
              <div class="cart">
              <img src="../../img/cart.png">
              </div>
            </div>           
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-pull-left" src="../../img/nav2.jpg">
            <div class="mui-media-body">
              千禧小番茄500g*1盒
              <p class='mui-ellipsis'>一千个喜事 不如一颗甜甜的我</p>
            </div>
            <div class="price">
              <span class="now">￥13.9</span>
              <div class="cart">
              <img src="../../img/cart.png">
              </div>
            </div>           
          </a>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>
<style scoped>
  @import  '../../lib/mui/css/mui.css';

  /*基本样式*/
  .fruit-container{
    background-color: #fff;
    width:375px;
    height: auto;
  }
  .fruit-container .mint-swipe{
    height:240px;
  }
  /*第一层  搜索栏*/
  .search{
    height:3rem;
    line-height: 3rem;
    display: flex;
    flex-wrap: nowrap;
    background: #fff;
  }
  .search>img{
    height:14px;
    margin:15px 40px 0 20px;
  }
  input[type=text]{
    width:170px!important;
    border:1px solid #E6E6E6!important;
    border-radius:35px!important;
    height: 36px!important;  
    margin-left:70px; 
  }
  .search .mui-input-row mui-input-clear{
    position: relative;
    margin:0;
    padding:0;
    
  }
  .search .mui-input-row .mui-icon.mui-icon-search{
    position: absolute;
    left:74px;
    top:10px;
  }
  .search .mui-input-row .mui-word-search{
    position: absolute;
    left:100px;
    color:#bbb;
    font-size:14px;
  }
  /*第二层  导航栏样式修改*/
  .fruit-container #slider{
    width:375px;
    height:auto ;
    position: relative;
    overflow: hidden;
  }
  #sliderSegmentedControl{ 
    top: 0;
    left: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    transition: left 0.5s;
  }
  .mui-scroll{
    overflow-x:scroll;
    overflow-y: hidden;
    white-space: nowrap;
  }
  .mui-segmented-control.mui-segmented-control-inverted .mui-control-item{
     width:20%;   
     padding:5px;
  }
  .mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active{   
    color:#ff4891 !important;  
  }
  .mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active span{
    border-bottom:2px solid #ff4891;
    padding-bottom:4px;
    background-image:url("../../img/bg2.png"); 
    background-position:-30px;
  }
  /*第三层：轮播图*/
  .fruit-container .mint-swipe-item img{
    width:100%;
    height:100%;
  }
  .fruit-container .fruit-ad img{
    width:375px;
    height: 210px;
  }
  /*第四层：商品列表*/
  .mui-table-view .mui-pull-left{
    height: 120px;
    line-height: 120px;
    width:120px;
  }
  .mui-table-view .mui-media-body{
    color:#474245;
    font-size: 16px;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .mui-table-view .price{
    margin-top:30px;
  }
  .mui-table-view .price .now{
    font-size: 16px;
    color:rgb(255, 72, 145);
    margin-right:2px;
  }
  .mui-table-view .price .old{
    text-decoration: line-through;
    font-size:12px;
    color:rgb(150, 150, 150);
  }
  .mui-table-view .cart{
    position: absolute;
    right:-10px;
    bottom:25px;
  }
  .mui-table-view .cart img{
    float: right;
    width:45px;
    margin-right: 20px;
  }
</style>


