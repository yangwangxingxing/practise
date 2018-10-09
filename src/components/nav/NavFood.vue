<template>
  <div class="veg-container">
    <!--第一层：搜索框-->
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
          <router-link to="/home" class="mui-control-item"  data-wid="tab-top-subpage-1.html">
            <span>热卖</span>
          </router-link>
          <router-link to="/home/navveg" class="mui-control-item" data-wid="tab-top-subpage-2.html">
            <span>蔬菜</span>
          </router-link>
          <router-link to="/home/navfruit" class="mui-control-item" data-wid="tab-top-subpage-3.html">
            <span>水果</span>
          </router-link>
          <router-link to="/home/navfood" class="mui-control-item  mui-active" href="#item4mobile  mui-active" data-wid="tab-top-subpage-4.html">
            <span>轻食</span>
          </router-link>
          <router-link to="/home/navoil" class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
            <span>粮油</span>
          </router-link>
          <a class="mui-control-item" data-wid="tab-top-subpage-6.html">
              <span>乳品</span>
          </a>
          <a class="mui-control-item" data-wid="tab-top-subpage-7.html">
              <span>零食</span>
          </a>
          <a class="mui-control-item" data-wid="tab-top-subpage-8.html">
              <span>酒饮</span>
          </a>
          <a class="mui-control-item" data-wid="tab-top-subpage-9.html">
              <span>熟食</span>
          </a>
        </div>
      </div>
    </div>
    <!--第三层:轮播图-->
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="../../img/nav-bn3.png" style="width:375px;">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../img/nav-bn4.jpg" style="width:375px;">
      </mt-swipe-item>
    </mt-swipe>
    <div class="veg-ad">
      <img src="../../img/nav6.jpg">
    </div>
    <!--第四层：商品列表-->
    <ul class="mui-table-view"> 
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-pull-left" src="../../img/nav-veg.jpg">
            <div class="mui-media-body">
              【优选】六鳌红心小地瓜500g
              <p class='mui-ellipsis'>个子虽小 香甜加倍奉上</p>
            </div>
            <div class="veg-icon">
              <img src="../../img/veg1.png">
              <span>100%第三方权威检测</span>
            </div>
            <div class="price">
              <span class="now">￥4.9</span>
              <span class="old">￥9.9</span>
              <div class="cart">
              <img src="../../img/cart.png">
              </div>
            </div>           
          </a>
        </li>
        <div class="veg-ad">
          <img src="../../img/nav-veg1.jpg">
        </div>
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-pull-left" src="../../img/nav-veg2.jpg">
            <div class="mui-media-body">
              东北油豆角300g
              <p class='mui-ellipsis'>东北来的脆生劲儿 真地道</p>
            </div>
            <div class="veg-icon">
              <img src="../../img/veg.png">
              <span>100%第三方权威检测</span>
            </div>
            <div class="price">
              <span class="now">￥8.4</span>
              <span class="old">￥9.9</span>
              <div class="cart">
              <img src="../../img/cart.png">
              </div>
            </div>           
          </a>
        </li>
        <div class="veg-ad">
          <img src="../../img/nav-veg3.jpg">
        </div>
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-pull-left" src="../../img/nav-veg4.jpg">
            <div class="mui-media-body">
              速冻金黄蔬菜拼盘400g
              <p class='mui-ellipsis'>请接收这份"营养组合"</p>
            </div>
            <div class="price">
              <span class="now">￥9.9</span>
              <span class="old">￥12.9</span>
              <div class="cart">
              <img src="../../img/cart.png">
              </div>
            </div>           
          </a>
        </li>
        <li class="veg-list">
          <span>订阅到货提醒</span>
          <p>货到了 我会记得喊声你哦</p>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-pull-left" src="../../img/nav-veg5.jpg">
            <div class="mui-media-body">
              【优选】波士顿奶油生菜100g
              <p class='mui-ellipsis'>水里开出的奶油"生菜花"</p>
            </div>
            <div class="price">
              <span class="now">￥9.9</span>
              <div class="cart">
              <img src="../../img/cart.png">
              </div>
            </div>           
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-pull-left" src="../../img/nav-veg6.jpg">
            <div class="mui-media-body">
              水果黄瓜*4根装
              <p class='mui-ellipsis'>小黄瓜总是更加鲜嫩</p>
            </div>
            <div class="price">
              <span class="now">￥3.9</span>
              <span class="old">￥7.9</span>
              <div class="cart">
              <img src="../../img/cart.png">
              </div>
            </div>           
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-pull-left" src="../../img/nav-veg7.jpg">
            <div class="mui-media-body">
              红黄小番茄组合500g
              <p class='mui-ellipsis'>沙拉界的当红twins组合</p>
            </div>
            <div class="price">
              <span class="now">￥9.9</span>
              <div class="cart">
              <img src="../../img/cart.png">
              </div>
            </div>           
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-pull-left" src="../../img/nav-veg8.jpg">
            <div class="mui-media-body">
              旱黄瓜500g(约3-4根)
              <p class='mui-ellipsis'>胖起来后 整个都变滑溜多了</p>
            </div>
            <div class="price">
              <span class="now">￥9.9</span>
              <div class="cart">
              <img src="../../img/cart.png">
              </div>
            </div>           
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-pull-left" src="../../img/nav-veg9.jpg">
            <div class="mui-media-body">
              黄心土豆500g(约2-4个)
              <p class='mui-ellipsis'>可软可脆 征服我的心靠厨艺</p>
            </div>
            <div class="price">
              <span class="now">￥1.9</span>
              <span class="now">￥3.9</span>
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
  /*基本样式*/
  .veg-container{
    background-color: #fff;
    width:375px;
    height: auto;
  }
  .veg-container .mint-swipe{
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
  .veg-container #slider{
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
  /*第三层：轮播*/
  .veg-container .veg-ad img{
    width:375px;
    height: 140px;
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
  .mui-table-view .veg-icon{
    font-size: 12px;
    border:1px solid rgb(245, 159, 193);
    display: inline;
  }
  .mui-table-view .veg-icon img{
    width:14px;
    height:14px;
    margin-left:2px;
    padding-top:3px;
  }
  .mui-table-view .veg-icon span{
    color:rgb(245, 159, 193);
    margin-right:2px;
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
  .veg-ad{
    height: 130px;
    margin: 20px auto;
  }
  .veg-list{
    margin:20px;
  }
  .veg-list span{
    font-size: 20px;
    margin-bottom: 10px;
  }
  .veg-list p{
    font-size: 12px;
  }
</style>

