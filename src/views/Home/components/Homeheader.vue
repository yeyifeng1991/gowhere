<template>
<!-- 头部尺寸 86px -->
  <div class="homeheader">
   <div class="headerleft">
     返回
    <!-- <i class="iconfont icon-fanhui"></i> -->
   </div>
   <div class="header-input"> 
     输入城市经典
     <!-- <i class="iconfont icon-xiazai17"></i>   -->
   </div>
   <div class="header-right">
     城市
       <!-- <i class="iconfont icon-jiantou"></i> -->
   </div>
  </div>
</template>

<script>
export default {
  name: 'Homeheader',
  data () {
    return {
      msg: 'homeheader界面'
    }
  }
}
</script>

<style  lang = "scss" scoped>
  .homeheader
  {
      display :flex;
      line-height :.86rem;
      background: #00bdc4;
      color: #fff;
     .headerleft
     {
      float :left;
      width :.64rem
     }
     .header-input
     {
      flex :1;
      height: .64rem;
      line-height: .64rem;
      margin-top: .12rem;
      margin-bottom: .12rem;
      /* margin-top:  */
      background: #fff;
      border-radius: .1rem;
      color: #ccc;
      
     }  
     .header-right
     {
      width :1.24rem;
      float :right;
      text-align: center;
     }
  }
</style>
