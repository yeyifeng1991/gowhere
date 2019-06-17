<template>
<!-- 头部尺寸 86px -->
  <div class="homeheader">
   <div class="headerleft">
     返回
    <!-- <i class="iconfont icon-fanhui"></i> -->
   </div>
   <div class="header-input"> 
     内容
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
      height :.86rem;
      display :flex;
     .headerleft
     {
      float :left;
      width :.64rem
     }
     .header-input
     {
      flex :1
     }  
     .header-right
     {
      width :1.24rem;
      float :right
     }
  }
</style>
