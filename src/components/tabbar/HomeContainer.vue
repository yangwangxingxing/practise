<!--HomeContainer.vue-->

<template>
  <div class="app">
    <!--第一部分：搜索栏-->
    <div class="search">
      <img src="../../img/home-icon.png">
      <div class="mui-input-row">
        <input type="text" class="mui-input-clear">
        <span class="mui-icon mui-icon-search"></span>   
        <span class="mui-word-search">搜索</span>
      </div>
    </div>
    <!--第二部分：导航栏-->
    <div id="slider" class="mui-slider mui-fullscreen">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							<span>热卖</span>
						</a>
						<router-link to="/home/navveg" class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							<span>蔬菜</span>
						</router-link>
						<router-link to="/home/navfruit" class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							<span>水果</span>
						</router-link>
						<router-link to="/home/navfood" class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							<span>轻食</span>
						</router-link>
						<router-link to="/home/navoil" class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
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
    <!--第三部分：图片轮播图  默认高度为0-->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in list" :key="item.id">
        <img :src="item.img_url">
      </mt-swipe-item>
    </mt-swipe>
    <!--第四部分：五宫格-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media "><router-link to="person/login">
                <img src="../../img/chao.gif">
                <div class="mui-media-body">49减20</div></router-link></li>
        <li class="mui-table-view-cell mui-media"><router-link to="person/login">
                <img src="../../img/ji.gif">
                <div class="mui-media-body">本周上新</div></router-link></li>
        <li class="mui-table-view-cell mui-media"><router-link to="person/login">
                <img src="../../img/hui.gif">
                <div class="mui-media-body">加入会员</div></router-link></li>
        <li class="mui-table-view-cell mui-media "><router-link to="person/login">
                <img src="../../img/yuan.gif">
                <div class="mui-media-body">省钱宝典</div></router-link></li>
        <li class="mui-table-view-cell mui-media"><router-link to="person/login">
                <img src="../../img/ri.gif">
                <div class="mui-media-body">每日签到</div></router-link></li>
    </ul>
    <!--第五部分：广告图片-->
    <div class="advertisement">
      <img src="../../img/card1.png" class="ad-img1">
      <img src="../../img/card2.png" class="ad-img2">
    </div>
    <!--第六部分：新人见面礼-->
    <div class="new-container">
        <img src="../../img/gift.gif">
    </div>
    <!--第七部分：商品列表-->
    <div>
      <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" ref="loadmore" :auto-fill="false">
      <ul class="mui-table-view"> <!--  mui-table-view-chevron -->
          <li class="mui-table-view-cell mui-media" v-for="item in pro_list" :key="item.id"  @click="getDetail(item.id)">
            <router-link to="/home/productlist">
              <img class="mui-pull-left" :src="item.img_url">
              <div class="mui-media-body">
                {{item.title}}
                <p class='mui-ellipsis'>{{item.details}}</p>
              </div>
              <div class="price">
                <span class="now">￥{{item.price_new}}</span>
                <span class="old">￥{{item.price_old}}</span>
                <div class="cart" @click="add">
                  <img src="../../img/cart.png">
                </div>
              </div>           
            </router-link>
          </li>
      </ul>
      <mt-button size="large" @click="loadmore()" class="loadmore">加载更多</mt-button>
    </mt-loadmore>
  </div>
</div>
</template>            
<script>
import {Toast} from "mint-ui";
import {Loadmore} from 'mint-ui'
  export default{
    data(){
      return{
        list:[],
        pro_list:[],
        pno:1
      }
    },
    created(){
      this.getImageList();
      this.getProductList();
    
    },
    methods:{
      add(){
        this.$store.commit("increment")
      },
      handleBottomChange(){
        this.bottomShow=status;
      },
      
        //加载更多
      loadBottom(){
        if(this.pno<=3){
          this.pno++;
          this.getProductList();
          }else{
              Toast("没有更多的数据了");
        }
        setTimeout(()=>{
          this.$refs.loadmore.onBottomLoaded();
        },500)
      },
      loadmore(){
        this.pno++;
        this.getProductList();
      },
      getImageList(){
        this.$http.get
        ("http://127.0.0.1:3000/homelist/list").then
        (result=>{
          var obj=result.body;
          if(obj.code == 1){      
            this.list=obj.msg;
          }else{      
            Toast("数据加载失败");
          }
        })
      },
      getProductList(){
        var pno=this.pno;
        var url=`http://127.0.0.1:3000/homelist/product_list?pno=${pno}`;
        this.$http.get(url).then(result=>{
          if(result.body.code == 1){
            this.pro_list=this.pro_list.concat(result.body.msg);
          }
          else{
            Toast("数据加载失败");
          }
        })
      },
      getDetail(id){
           this.$router.push({name:"productlist",params:{id}});
       }
    },
    components:{
            'mt-loadmore':Loadmore
        }
  }
</script>
<style scoped>
@import  '../../lib/mui/css/mui.css';
  /*基本样式*/
  .app{
    background-color: #fff;
  }
  /*父元素高度为0，设置为200px*/
  .app .mint-swipe{
    height:200px;
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
  .app #slider{
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
  /*第三层  修改图片轮播样式，自适应宽度*/
  .app .mint-swipe img{
    width:100%;
    height:100%;
    position: absolute;
  }
  /*第四层  修改五宫格样式 背景颜色  图片大小  边框  背景颜色*/
   .app .mui-grid-view.mui-grid-9{
     background-color:#fff;  
   }
  .app .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:0;   
  }
  .app .mui-grid-view.mui-grid-9 .mui-table-view-cell .mui-media-body{
    color:#474245;
    font-size: 0.75rem;
  }
  .app .mui-grid-view.mui-grid-9 img{
    width:40px;
    height:40px;  
  }
  /*第五层  修改广告图片样式*/
  .advertisement{
    display: inline-block;
  }
  .advertisement img{
    width:170px;
    height: 100px;    
  }
  .advertisement img.ad-img1{
    margin:0 5px 5px 12px;
  }
  .advertisement img.ad-img2{
    margin:0 12px 5px 5px;
  }
  /*第六层  新人见面礼*/
  .new-container{
    background: #fff;
    width:100%;
    height: 100%;
  }
  .new-container img{
    width:100%;
    height: 140px;
  }
  /*第七层  商品列表*/
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