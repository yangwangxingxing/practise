<template>
  <div class="app-container">
      <!--1.顶部固定导航栏-->
      <!-- <mt-header fixed title="每日优鲜"></mt-header>  -->  
      <!--2：多个组件切换  router-view-->
      <router-view></router-view>
      <!--3:tabbar 固定在底端导航条-->
      <nav class="mui-bar mui-bar-tab">
          <router-link class="mui-tab-item mui-active change" to="/home">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
          </router-link>
          <router-link class="mui-tab-item change" to="/member">
            <span class="mui-icon mui-icon-contact"></span>
            <span class="mui-tab-label">会员</span>
          </router-link>
          <router-link class="mui-tab-item change" to="/find">
            <span class="mui-icon mui-icon-extra mui-icon-extra-find"></span>
            <span class="mui-tab-label">发现</span>
          </router-link>
          <router-link class="mui-tab-item change" to="/cart">
            <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
              <span class="mui-badge">{{$store.getters.optCount}}</span>
            </span>
            <span class="mui-tab-label">购物车</span>
          </router-link>
          <router-link class="mui-tab-item change" to="/person">
            <span class="mui-icon mui-icon-person"></span>
            <span class="mui-tab-label">我的</span>
          </router-link>
      </nav>
  </div>
</template>
<script>
  
  export default {
    data:function(){
      return{

      }
    },
    mounted(){
      this.change();
    },
    methods:{
      change(){
        $(".mui-bar.mui-bar-tab .change").click(function(){ 
          var $btn =$(this);                
          if(!$btn.hasClass("mui-active")){  
              $btn.addClass("mui-active");
              $btn.siblings().removeClass("mui-active");              
            }else{   
            $btn.siblings().removeClass("mui-active"); 
            $btn.addClass("mui-active");  
        }                        
      }) 
      } 
    }
  }
</script>

<style>
  .app-container{
    padding-bottom:50px;
  }
  .mui-bar-tab .mui-tab-item.mui-active{
    color:pink;
  }
</style>
