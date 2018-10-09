<template>
  <div class="fd-container"> 
    <!--第一层：搜索栏-->   
     <div id="slider" class="mui-slider">
        <img class="fd-icon" src="../../img/panda.png">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							<span>精选</span>
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							<span>快手食谱</span>
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							<span>甜点饮品</span>
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							<span>生活百科</span>
						</a>
					</div>
				</div>
			</div>
    <!--第二层：轮播图-->
    <mt-swipe :auto="4000" class="swipe">
      <mt-swipe-item v-for="item in list" :key="item.id">
        <img :src="item.img_url">
      </mt-swipe-item>
    </mt-swipe>
    <!--第三层：今日最新-->
    <div class="fd-news">
      <div class="fd-title">
        <span class="fd-news-title">今日最新</span>
        <span class="fd-news-subtitle">| 今日份新鲜感已到账，请注意查收</span>
      </div>
      <div class="fd-newslist">
        <img src="../../img/find-icon1.png">
        <span>小白便当</span>
      </div> 
      <img src="../../img/fish.webp">
      <p>【红烧鱼】 10分钟完美复刻家的味道</p>
      <div class="fd-newslist-share">
        <span class="fd-newslist-share-left">浏览 2631</span>
        <div class="fd-newslist-share-right">
          <img src="../../img/share.png" mode="aspectFill">
          <span>分享</span>
        </div>
      </div>
      <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in pro_list" :key="item.id">
					<a href="javascript:;">
						<img class="mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<p class="fd-title">
                <img :src="item.title_url">
                <span>{{item.title}}</span>
              </p>
							<p class='details'>{{item.details}}</p>
						</div>
            <div class="watch">
              <span class="count">浏览{{item.count}}</span>
              <div class="share">
                <img src="../../img/share.png">
              </div>
            </div>          
					</a>
				</li>
			</ul>
    </div>
  </div>
</template>
<script>
import {Toast} from "mint-ui";
  export default{
    data(){
      return{
        list:[],
        pro_list:[]
      }
    },
    created(){
      this.getImageList();
      this.getProductList();
    },
    methods:{
      getImageList(){
        this.$http.get
        ("http://127.0.0.1:3000/findlist/list").then
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
        var url="http://127.0.0.1:3000/findlist/product_list?id="+this.id;
        this.$http.get(url).then(result=>{
          console.log(result);
          if(result.body.code == 1){
            this.pro_list=this.pro_list.concat(result.body.msg);
          }
        })
      }
    }
  }
</script>
<style scoped>
  .fd-container{
    background: #fff;
  }
  /*第一层  导航栏*/
  .fd-container #slider{
    display: flex;
    flex-wrap: nowrap;
    padding-top:10px;
    padding-left:10px;    
    border-bottom: 1px solid #f5f5f5;  
    background: #fff;     
    position: relative;       
  }
  .fd-container .fd-icon{
    width:24px;
    height: 24px;
    border-radius: 50%;
    margin-top:5px;
  }
  .mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active{   
    color:#ff4891 !important;  
  }
  .mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active span{
    border-bottom:2px solid #ff4891;
    padding-bottom: 8px;  
  }
  .mui-segmented-control.mui-segmented-control-inverted .mui-control-item span{
    font-size: 14px;
  }
  /*第二层：轮播图*/
  .fd-container .swipe{
    background-color: #fff;
    position:relative;
    width:350px;
    height:150px;
    border-radius: 15px;
    margin:25px 15px 25px 10px;
  }
  .fd-container .swipe img{
    width:100%;
    height:100%; 
  }
  /*第三层：今日最新*/
  .fd-news{
    display:inline-block;
    padding:0 10px 20px;
  }
  .fd-news .fd-title{
    margin-bottom: 20px;
  }
  .fd-news .fd-news-title{
    font-size: 22px;
    font-weight: 400;
    color:#474245;
    padding-right: 4px;
  }
  .fd-news .fd-news-subtitle{
    font-size:12px;
    color:#969696;
    padding-left: 4px;
  }
  /*今日最新 第一层信息列表 红烧鱼*/
  .fd-news .fd-newslist{
    display:block;
    font-size: 14px;
    margin:10px;
  }
  .fd-news .fd-newslist img{
    width:24px;
    height: 24px;
    border-radius: 50%;
    position: relative;
    margin-right:10px;
  }
  .fd-news .fd-newslist>span{
    position: absolute;
    color:"#474245";
    line-height: 24px;
  }
  .fd-news img{
    width:100%;
    height:194px;
    border-radius: 10px;
  }
  .fd-news p{
    color:#474245;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin-top:10px;
    margin-bottom:10px;
  }
  .fd-news .fd-newslist-share{
    display: flex;
    height: 30px;
    line-height: 30px;
    margin-bottom:20px;
  }
  .fd-news .fd-newslist-share .fd-newslist-share-left{
    font-size: 14px;
    color:#969696;
  }
  .fd-news .fd-newslist-share .fd-newslist-share-right{
    display: flex;
    margin-bottom:20px;
  }
  .fd-news .fd-newslist-share .fd-newslist-share-right span{
    color:#474245;
    font-size:12px;
    margin-left:5px;
  }
  .fd-news .fd-newslist-share .fd-newslist-share-right img{
    margin-left:240px;
    width:22px;
    height: 28px;
  }
  /*产品列表*/
  .mui-table-view{
    display: inline-block;
  }
  .mui-table-view .mui-table-view-cell.mui-media{
    width:345px;
  }
  .mui-table-view .mui-pull-left{
    width:150px;
    height: 100px;
  } 
  .mui-table-view .mui-media-body .fd-title{
    display: flex;
    align-items: center;
    margin-top:0px;
    margin-bottom: 10px;
  }
  .mui-table-view .mui-media-body p img{
    width:16px;
    height:16px;
    margin-left: 10px;
  }
  .mui-table-view .mui-media-body p>span{
    font-size: 12px;
    line-height: 18px;
    color:#474245;
    padding-left: 5px;
  }
  .mui-table-view .mui-media-body .details{
    display:flex;
    font-size: 15px;
    color:#474346;
    white-space:normal;
    align-items: flex-start;
    margin-left: 10px;
  }
  .mui-table-view .watch{
    display: flex;
    height: 30px;
    line-height: 30px;
  }
  .mui-table-view .watch .count{
    font-size: 12px;
    color:#969696;
    margin-left: 10px;
  }
  .mui-table-view .watch .share img{
    width:22px;
    height: 28px;
    margin-left: 78px;
  }
</style>