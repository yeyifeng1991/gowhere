<template>
  <div class="home">
    <homeheader></homeheader>
    <homeswiper></homeswiper>
  </div>
</template>

<script>
import Homeheader from './components/Homeheader' // 局面组件
import Homeswiper from './components/Homeswiper'
export default {
  name: 'Home',
  components: // 声明组件
  {
    Homeheader,
    Homeswiper
  },
  data () {
    return {
      msg: 'home界面'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
  margin:0;
  padding:0;
  }

</style>
