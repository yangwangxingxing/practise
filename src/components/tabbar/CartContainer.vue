<template>
  <div class="cart-container">
    <div class="buycar-empty">
      <img src="../../img/icon_buycar_empty.png">
      <p>您还没有添加任何商品</p>
    </div>
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
  .cart-container .buycar-empty{
    width:100%;
    height:360px;
    line-height: 360px;
    background: #fff;
    text-align: center;
    position: relative;
  }
  .cart-container .buycar-empty img{
    width:25%;
    height: 25%;
    position: absolute;
    top:50%;
    left:38%;
  }
  .cart-container .buycar-empty p{
    width:100%;
    height: 10%;
    position: absolute;
    top:35%;
    font-size: 16px;
  }
</style>