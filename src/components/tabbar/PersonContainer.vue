<template>
  <div class="person-container">
    <!--第一层：登录页面-->
    <div class="person-login">
      <router-link to="/person/login" class="person-bg">
        <span>用户登录</span>
      </router-link>
    </div>
    <div class="person-items">
      <ul>
        <li class="person-items-list">
          <span>0元</span>
        </li>
        <li class="person-items-list">
          <span>0个</span>
        </li>
        <li class="person-items-list">
          <span>0张</span>
        </li>
        <li class="person-items-list">
          <span>分</span>
        </li>
      </ul>
      <ul>
        <li class="person-items-list">
          <span>余额.储值</span>
        </li>
        <li class="person-items-list">
          <span>红包</span>
        </li>
        <li class="person-items-list">
          <span>商品券</span>
        </li>
        <li class="person-items-list">
          <span>积分兑换</span>
        </li>
      </ul>
    </div>
    <!--第二层：会员权益-->
    <div class="person-rights">
      <h4>会员权益</h4>
      <span>开通会员</span>
      <p>成为优享会员，预计1年将为你<span>节省1121.30元</span></p>
    </div>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media "><a href="#">
            <img src="../../img/mem-icon1.png">
            <div class="mui-media-body">购物返现</div></a></li>
        <li class="mui-table-view-cell mui-media"><a href="#">
            <img src="../../img/mem-icon2.png">
            <div class="mui-media-body">会员专享价</div></a></li>
        <li class="mui-table-view-cell mui-media"><a href="#">
            <img src="../../img/mem-icon3.png">
            <div class="mui-media-body">1小时送达</div></a></li>
        <li class="mui-table-view-cell mui-media "><a href="#">
            <img src="../../img/mem-icon4.png">
            <div class="mui-media-body">专属红包</div></a></li>
        <li class="mui-table-view-cell mui-media"><a href="#">
            <img src="../../img/mem-icon5.png">
            <div class="mui-media-body">专属客服</div></a></li>
        <li class="mui-table-view-cell mui-media"><a href="#">
            <img src="../../img/ps-icon.png">
            <div class="mui-media-body">敬请期待</div></a></li>
    </ul>
    <div class="person-pic">
      <img src="../../img/ps-icon1.png">
      <img src="../../img/ps-icon2.png">
    </div>
    <!--第三层：我的订单-->
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell">
        <a href="#" class="mui-navigate-right">我的订单</a>
      </li>
      <li class="mui-table-view-cell">
        <a href="#" class="mui-navigate-right">我的地址</a>
      </li>
      <li class="mui-table-view-cell">
        <a href="#" class="mui-navigate-right">账户与安全</a>
      </li>
      <li class="mui-table-view-cell">
        <a href="#" class="mui-navigate-right">客户与帮助</a>
      </li>
      <li class="mui-table-view-cell">
        <a href="#" class="mui-navigate-right">意见反馈</a>
      </li>
      <li class="mui-table-view-cell">
        <a href="#" class="mui-navigate-right">关于我们</a>
      </li>
    </ul>
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
<style scoped>
@import  '../../lib/mui/css/mui.css';
  /*第一层  登录页面*/
  .person-container .person-login{   
    width:100%;
    height:160px;
  }
  .person-container .person-bg{
    background: url("../../img/ps-bg.png") no-repeat;
    width:100%;
    height: 100%;
    position: relative;
  }
  .person-container .person-bg span{ 
    position: absolute;
    top:60px;
    left:145px;
    border:1px solid #f1337f;
    border-radius: 4px;
    width:80px;
    height:36px;
    line-height: 36px;
    color:#ff4891;
    font-size: 14px;    
    text-align: center;
  }
  .person-container .person-items{
    width:100%;
    padding-top:10px;
    padding-bottom: 10px;
    background: #fff;
  }
   .person-container .person-items ul{
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
    background: #fff;
  }
  .person-container .person-items .person-items-list{
    padding-left:0;
    width:25%;
    height: 25px;
    line-height: 25px;
    display: inline-block;
    text-align: center;
  }
  .person-container .person-items .person-items-list span{
    color:#4d4d4d;
    font-size: 13px;
  } 
  /*第二层：会员权益*/
  .person-container .person-rights{
    background:#fff;
    width:375px;
    height: 60px;
    padding-top:10px;
  }
  .person-container .person-rights>h4{
    font-size:20px;
    font-weight: 300;
    color:#474245;
    margin:10px;
    display: inline;
  }
  .person-container .person-rights>span{
    font-size: 12px;
    color:#969696;
    margin-left:210px;;
  }
  .person-container .person-rights>p{
    font-size: 12px;
    color:#969696;
    margin:10px;
  }
  .person-container .person-rights>p>span{
    color:#ff4891;
  }
  .person-container .mui-table-view.mui-grid-view{
    background: #fff;
    border:none;
    width:375px;
    overflow-x: scroll;
    white-space: nowrap;
  }  
   .person-container .mui-table-view.mui-grid-view .mui-table-view-cell{
     width:25%;   
   }
  .person-container .mui-table-view.mui-grid-view .mui-table-view-cell img{
    width:28px;
    height: 28px;
  }
  .person-container .mui-table-view.mui-grid-view .mui-table-view-cell div{
    font-size: 12px;
    color:#474245;
    margin:0 auto;
  }
  .person-container .person-pic{
    width:100%;
  }
  .person-container .person-pic img{
    width:50%;
    background: #fff;
    padding-bottom:10px;
  }
  /*第三层：我的订单*/
  .person-container .mui-table-view-chevron .mui-table-view-cell{
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    margin:0;
    color:#262626;
  }
</style>