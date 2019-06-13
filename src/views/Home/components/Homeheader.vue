<template>
  <div class="home_header">
   <div class="header-left">
    <i class="iconfont icon-fanhui"></i>
   </div>
   <div class="header-center">
     <i class="iconfont icon-xiazai17"></i>  
   </div>
   <div class="header-right">
       <i class="iconfont icon-jiantou"></i>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home_header 
  {
   height: 0.86rem;
   background: red;
   display :flex
  }

</style>
