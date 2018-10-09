<template>
  <div class="login-container">
    <mt-header>
        <router-link to="/person" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
    </mt-header> 
    <div class="login-phone">
      <input type="text" placeholder="请输入手机号" maxlength="11">
      <div class="login-phone-text">语音验证码 </div>
    </div>
    <div class="login-pwd">
      <input type="text" placeholder="输入验证码" maxlength="6">
    </div>
    <div class="login-rule">
      <input type="radio">
      <span class="login-rule-text">  
        我已认真阅读、理解并同意 
        <a href="#">《每日优鲜用户协议》</a>及
        <a href="#">《每日优鲜隐私策略》</a> 
      </span>
      <button class="login">登录</button>
    </div>
    <div class="login-msg">为方便您及时查询订单信息，需要验证您的手机号来登录</div>
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
  .mint-header{
    background: #ff4891;
  }
  .login-container{
    background: #fff;
    height:1200px;
  }
  .login-container .login-phone{
    padding-top:100px;
  }
  .login-container .login-phone,.login-pwd{
    display: flex;
    flex-direction:row;
    border-bottom:1px solid #bbb;
    margin-left:30px;
    margin-right: 30px;
  }
  .login-container .login-phone input{
   width:70%;
   height: 60px;
  }
  input[type=text]{
    margin:0;
    padding:0;
    border:none;
    height: 50px;
  }
  button{
    height: 40px;
    line-height: 40px;
  }
  .login-container .login-phone .login-phone-text{
    color:#ff4891;
    border:1px solid #ff4891;
    width:90px;
    height:40px;
    padding:8px;
    margin-bottom:0;
    margin-top:15px;
    font-size: 14px;
    border-radius: 5px;
  }
  .login-container .login-rule{
    font-size:12px;
    margin:20px 30px;
  }
  .login-container .login-rule .login-rule-text a{
    color:#ff4891;
  }
  .login-container .login-rule .login{
    width:100%;
    color:#fff;
    font-size: 16px;
    background: #ddd;
    margin-top:15px;
  }
  .login-container .login-msg{
    color: #969696;
    font-size: 12px;
    text-align: center;
  }
  </style>