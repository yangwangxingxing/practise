<template>
  <div class="mb-container">
    <!--第一层：vip免费体验-->
    <div class="vip">
      <div class="mb-header">
        <div class="mb-vip">
          <div class="mb-logo">
            <img src="../../img/mem-logo.png">
            <img src="../../img/vip-header-icon.png">
          </div>
          <span>立即开通</span>
        </div>
        <div class="mb-save">
          <span>预计一年为您节省</span>
          <span class="mb-price">1121.30</span>元
        </div>                     
      </div>
    </div>
    <!--第二层：五宫格-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media "><a href="#">
            <img src="../../img/mem-icon1.png">
            <div class="mui-media-body">购物返现5%</div></a></li>
        <li class="mui-table-view-cell mui-media"><a href="#">
            <img src="../../img/mem-icon2.png">
            <div class="mui-media-body">会员专享价</div></a></li>
        <li class="mui-table-view-cell mui-media"><a href="#">
            <img src="../../img/mem-icon3.png">
            <div class="mui-media-body">1小时送达</div></a></li>
        <li class="mui-table-view-cell mui-media "><a href="#">
            <img src="../../img/mem-icon4.png">
            <div class="mui-media-body">专享红包</div></a></li>
        <li class="mui-table-view-cell mui-media"><a href="#">
            <img src="../../img/mem-icon5.png">
            <div class="mui-media-body">专属客服</div></a></li>
    </ul>
    <!--第三层：专属红包-->
    <div class="my-red-packets">
      <img src="../../img/mem-icon6.png">
      <img src="../../img/mem-icon7.png">
    </div>
    <!--第四层：商品列表-->
    <div class="mb-product-list">
      <div class="product-list-word">会员专享5折起</div>
      <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-pull-left" src="../../img/product1.jpg">
						<div class="mui-media-body">
							红酒巧克力面包300g
							<p class='mui-ellipsis'>红酒和巧克力共舞 甜醉了</p>
						</div>
            <div class="price">
              <div class="now">￥36.8</div>
              <div class="old">￥17.9</div>
              <div class="cart">
                <img src="../../img/cart.png">
              </div>
            </div>           
					</a>
				</li>
        <li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-pull-left" src="../../img/product2.jpg">
						<div class="mui-media-body">
              【2瓶】百事蓝可乐450ml
							<p class='mui-ellipsis'>一杯拥有巴厘岛蓝的可乐</p>
						</div>
            <div class="price">
              <div class="now">￥19.8</div>
              <div class="old">￥9.9</div>
              <div class="cart">
                <img src="../../img/cart.png">
              </div>
            </div>           
					</a>
				</li>
        <li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-pull-left" src="../../img/product3.jpg">
						<div class="mui-media-body">
							大成水煎鸡胸【原味】120g
							<p class='mui-ellipsis'>吃水煎的鸡扒 不担心卡路里</p>
						</div>
            <div class="price">
              <div class="now">￥42</div>
              <div class="old">￥38.6</div>
              <div class="cart">
                <img src="../../img/cart.png">
              </div>
            </div>           
					</a>
				</li>
			</ul>
    </div>
    <div class="mb-sale-out">以下商品已抢光</div>
  </div>
</template>
<script>
  export default{
    data(){
      return{

      }
    },
    methods:{

    }
  }
</script>
<style>
/*第一层：vip免费体验*/
  .mb-container .vip{
    background: #FFB53E;
    width:100%;
    height:152px;
    z-index: 20;
    position: relative;
  }
  .mb-container .vip .mb-header{
    background: url("../../img/mem-bg1.png") no-repeat;
    background-size:100% 100%;
    position: absolute;
    top:32px;
    left: 20px;
    margin:0 auto;
    width:90%;
    height:120px;
  }
 .mb-container .vip .mb-logo{
   margin-top:20px;
   margin-left:25px;
 }
 .mb-container .vip .mb-logo img{
   width:50px;
   position: absolute;
 }
 .mb-container .vip .mb-vip>span{
   color:#fff;
   font-size: 12px;
   margin-left:90px;
   margin-top:100px;
   background-image: url("../../img/go-buy-vip-btn.png");
   padding:5px;
 }
 .mb-container .vip .mb-header .mb-save{
   background-image: url("../../img/mem-bg.png");
   background-size: 100% 100%;
   width:90%;
   height: 50px;
   line-height: 50px;
   position: absolute;
   left:20px;
   bottom:-30px;
   font-size: 15px;
   color:#474245;
 }
 .mb-container .vip .mb-header .mb-save span{
   margin-left:10px;
 }
 .mb-container .vip .mb-header .mb-save .mb-price{
   color:#ff4891;
 }
 /*第二层：五宫格*/
 .mb-container .mui-table-view.mui-grid-view{
   background: #fff;
 }
 .mui-table-view.mui-grid-view .mui-table-view-cell.mui-media{
   width:20%;
   padding:0;
   border:none;
   margin-top:30px;
 }
 .mui-table-view.mui-grid-view .mui-table-view-cell.mui-media img{
   width:35px;
 }
.mui-table-view.mui-grid-view .mui-table-view-cell.mui-media .mui-media-body{
  width:75px;
  font-size:12px;
  color:#969696;
}
/*第三层：专属红包*/
.mb-container .my-red-packets{
  background: #fff;
  width:100%;
  display: inline-block;
  white-space: nowrap;
  overflow-x: scroll; 
}
.mb-container .my-red-packets img{
  width:55%;
  padding:0 5px 30px 15px;
}
/*第四层：商品列表*/
.mb-product-list .product-list-word{
  background: #fff;
}
.mb-product-list .mui-table-view .mui-pull-left{
  margin-right:30px;
  width:105px;
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
.mb-container .mb-sale-out{
  font-size: 18px;
  background: #fff;
  padding-top:20px;
  padding-bottom: 70px;
  padding-left: 30px;
}
</style>