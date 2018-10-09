<template>
  <div class="prolist-container">
    <mt-header>
        <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
    </mt-header> 
    <!--第一层：商品详情-->
    <div class="prolist-header">
      <div class="shop-detail">商品详情</div>
      <img src="../../img/share.png">
    </div>
    <!--第二层：轮播图-->
    <!-- <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in list" :key="item.id">
        <img :src="item.img_url">
      </mt-swipe-item>
    </mt-swipe> -->
  
      <!--第三层：商品信息-->
    <div class="prolist-info">
      <img :src="list.img_url">
      <div class="prolist-title">
        <h4>{{list.details}}</h4>
        <span>{{list.title}}</span>
      </div>
      <div class="prolist-price">
        <div class="price">
          <span class="price_new">￥{{list.price_new}}</span>
          <span class="price_old">￥{{list.price_old}}</span>
          <span class="count">已售{{list.count}}份</span>
        </div>
        <div class="address">
          <span>•&nbsp;产地中国&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            •&nbsp;次日达&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;实付满69包邮</span>
        </div>
        <!--会员卡-->
        <div class="prolist-card">
          <div class="member-card">
            <div class="mb-card-left"> 
              <img src="../../img/prolist.png">
            </div>
            <div class="mb-card-center">
              <span>支付8元开会员</span><br>
              <span>购买本商品更返0.25元</span>
            </div>
            <div class="mb-card-right">
              <span>去开通</span>
            </div>
          </div>
          <div class="share-card">
            <div class="share-card-left"> 
              <img src="../../img/prolist1.png">
            </div>
            <div class="share-card-center">
              <span>该商品分享可领49减20红包</span>
            </div>
            <div class="share-card-right">
              <span>去分享</span>
            </div>
          </div>
          <div class="share-person">
            <span>已经有4442人分享了该商品</span>
          </div>
        </div>
      </div>
      <!--买家说-->
      <div class="prolist-buyer">
        <div class="buyer-name">
          <img src="../../img/prolist2.png">
          <span>粟米</span>
        </div>
        <div class="buyer-saying">
          <span>专注乳品11年，本着给女儿喝放心奶的初心，为每个家庭挑选新鲜、安全的牛奶</span>
        </div>
        <div class="prolist-intr">
          <img src="../../img/prolist3.png">
          <div class="prolist-intr-text">
            <span>
              这款发酵乳甄选牛乳，加入菌种发酵，搭配阳光燕麦，融入黄桃调制而成。
              它奶香浓郁，融入燕麦黄桃味，口感畅轻爽滑，早餐好搭档酸甜好滋味。
            </span>
          </div>
        </div>
      </div>
    </div>
    <!--第四层：商品详情-->
    <div class="prolist-detail">
      <div class="prolist-detail-text">
        <div class="prolist-detail-title">商品详情</div>
        <div class="prolist-detail-content">
          <div>规格:两盒</div>
          <div>重量:250g*2</div>
          <div>包装:盒</div>
          <div>保质期:21天</div>
          <div>贮存方法:冷藏</div>
        </div>
      </div>
      <div class="prolist-detail-img">
          <img src="../../img/prolist17.jpg">
          <img src="../../img/prolist18.jpg">
          <img src="../../img/prolist19.jpg">
          <img src="../../img/prolist20.jpg">
          <img src="../../img/prolist21.jpg">
          <img src="../../img/prolist22.jpg">
          <img src="../../img/prolist23.jpg">
          <img src="../../img/prolist24.jpg">
          <img src="../../img/prolist25.jpg">
          <img src="../../img/prolist26.jpg">
          <img src="../../img/prolist27.jpg">
          <img src="../../img/prolist28.jpg">
          <img src="../../img/prolist29.jpg">
          <img src="../../img/prolist30.jpg">
          <img src="../../img/prolist31.jpg">
      </div>
    </div>
    <div class="prolist-footer">
     <!-- <span class="mui-icon-extra mui-icon-extra-cart">
        <span class="mui-badge" v-model="count">{{$store.getters.optCount}}</span>
      </span>
      <span class="prolist-cart"  @click="addCart">加入购物车</span>  -->
       <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">{{$store.getters.optCount}}</span>
       </span>
      <span @click="addCart" class="prolist-cart">
        加入购物车
      </span>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        obj:{max:3},
        list:{},
        id:this.$route.params.id,
        count:0
      }
    },
    created(){
      this.getProductList();
    },
    methods:{ 
      addCart(){
        this.$store.commit("increment");
      },
      getProductList(){   
        this.$http.get
        ("http://127.0.0.1:3000/productlist/list?id="+this.id).then
        (result=>{
          var obj=result.body;
          if(obj.code == 1){      
            this.list=obj.msg[0];
          }else{      
            Toast("数据加载失败");
          }
        })
      },
      add(){this.count++},
      min(){
          if(this.count>0){
              this.count--
          }
      }
    }
  }
</script>
<style scoped>
 .mint-header{
    background: #ff4891;
  }
/* 第一层：商品详情 */
  .prolist-container{
    background: #fff;
  }
  .prolist-header{
    width:375px;
    height:44px;
    line-height: 44px;
    display:flex;
    
    color: #ff4891;
    border:1px solid #eee;
  }
  .prolist-container .shop-detail{
    margin:0 auto; 
    border-bottom: 2px solid #ff4891;
    font-size: 16px;
    font-weight: 600;
  }
  .prolist-container .prolist-header img{
    float: right;
    margin:10px;
    width:22px;
    height:22px;
  }
 /* 第三层：商品信息 */
 /*第一部分：价格样式*/
 .prolist-info{
   margin-top:50px;
 }
 .prolist-info img{
   width:100%;
   margin-bottom: 15px;
 }
 .prolist-info .prolist-title{
   margin:15px;
 }
 .prolist-info .prolist-title h4{
   font-size: 20px;
   color:#474245;
 }
  .prolist-info .prolist-title span{
    margin-top: 10px;
    font-size: 18px;
  }
  .prolist-info .prolist-price .price{
    font-size: 12px;
    color:#969696;
    margin-top:15px;
  }
  .prolist-info .prolist-price .price_new{
    color:rgb(255, 72, 145);
    font-size: 18px;
    margin-left:15px;
  }
  .prolist-info .prolist-price .price_old{
    text-decoration: line-through;
    margin-left:5px;
  }
  .prolist-info .prolist-price .count{
    float: right;
    margin-right: 20px;
  }
  .prolist-info .prolist-price .address{
    font-size: 12px;
    color:#262626;
    margin:15px;
  }
  /*第二部分：会员卡和红包样式*/
  /*会员卡样式*/
  .prolist-info .prolist-price .prolist-card .member-card{
    background: url("../../img/product-detail-member-bg.png") no-repeat center;
    width:340px;
    height:60px;
    margin-left: 17px;
    margin-bottom: 15px;
    border-radius: 8px;
    display:flex;
    flex-direction: row;
  }
  .prolist-info .prolist-price .prolist-card .mb-card-left img{  
    width:37px;
    margin:20px 10px;
  }
  .prolist-info .prolist-price .prolist-card .mb-card-center{
    color:#8B572A;
    font-size:13px;
    float: left;
    margin-left:20px;
    padding-top:10px;
  }
  .prolist-info .prolist-price .prolist-card .mb-card-right{
    float: left;
    padding-top:22px;
    margin-left:70px;
    font-size:13px;
    color:#474245;
  }
  /*红包样式*/
  .prolist-info .prolist-price .prolist-card .share-card{
    background: url("../../img/product-share-redpacket.png") no-repeat center;
    width:340px;
    height:60px;
    margin-left: 17px;
    margin-bottom: 15px;
    border-radius: 8px;
    display:flex;
    flex-direction: row;
  }
  .prolist-info .prolist-price .prolist-card .share-card-left img{  
    width:37px;
    margin:20px 10px;
  }
  .prolist-info .prolist-price .prolist-card .share-card-center{
    color:#ff4891;
    font-size:13px;
    float: left;
    padding-top:20px;
  }
  .prolist-info .prolist-price .prolist-card .share-card-right{
    float: left;
    padding-top:22px;
    margin-left:60px;
    font-size:13px;
    color:#ff4891;
  }
  .prolist-info .prolist-price .prolist-card .share-person{
    font-size: 12px;
    color:#969696;
    margin-left:30px;
  }
  /*买家说*/
  .prolist-buyer .buyer-name{
    display:flex;
    flex-direction: row;
    margin-top:20px;
    margin-left:20px;
  }
  .prolist-buyer .buyer-name img{
    width:62px;
    height:62px;
  }
  .prolist-buyer .buyer-name span{
    font-weight: 700;
    margin-top:35px;
    margin-left:10px;
  }
  .prolist-buyer .buyer-saying{
    width:90%;
    margin-left:20px;
    margin-bottom:20px;
    text-align: left;
    color:#474245;
    font-size:14px;
  }
  .prolist-buyer .prolist-intr{
    width:90%;
    height: 180px;
    margin-left:20px;
    background: #eee;
 
  }
  .prolist-buyer .prolist-intr img{
    width:30px;
    margin:10px;
  }
  .prolist-buyer .prolist-intr .prolist-intr-text{
    width:95%;
    margin-left:10px;
  }
  .prolist-buyer .prolist-intr .prolist-intr-text span{
    font-size:14px;
    color:#474245;
    margin-bottom:20px;
  }
  /*第四层：商品详情*/
  .prolist-detail .prolist-detail-text .prolist-detail-title{
    font-size:16px;
    font-weight: 700;
    margin:20px;
  }
  .prolist-detail .prolist-detail-text .prolist-detail-content{
    margin:20px;
  }
  .prolist-detail .prolist-detail-text .prolist-detail-content div{
    color:#969696;
    font-size: 14px;
    margin-bottom:20px;
  }
  .prolist-detail .prolist-detail-img{
    padding:0;
    margin:0;
    height:3750px;
  }
  .prolist-detail .prolist-detail-img img{
    width:100%;
    float: left;
  }
  /*购物车*/
  .prolist-footer{
    position: fixed;
    width:100%;
    height:40px;
    bottom:50px;
    background: #ff4891;
  }
  .prolist-footer .mui-icon-extra.mui-icon-extra-cart{
    background: #fff;
    width:14%;
    height: 100%;
    padding:8px 12px;
  }
  .prolist-footer .mui-icon .mui-badge{
    top:4px;
    left:36px;
  }
  .prolist-footer .prolist-cart{
    margin-left:32%;
    color:#fff;
    font-size: 16px; 
  }
</style>