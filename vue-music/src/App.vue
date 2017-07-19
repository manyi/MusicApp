<template>
<<<<<<< HEAD
  <div id="app">
     <m-header></m-header>
     <tab></tab>
     <router-view></router-view>
=======
  <div id="app" @touchmove.prevent>
     <m-header></m-header>
     <tab></tab>
     <keep-alive>
        <router-view></router-view>
     </keep-alive>
>>>>>>> 2017/7/19
  </div>
</template>

<script>
<<<<<<< HEAD

import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'

export default {
  components: {
    MHeader,
    Tab
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  
  #app
    color:$color-theme

</style>
=======
  import MHeader from 'components/m-header/m-header'
  import Tab from 'components/tab/tab'

  export default {
    components: {
      MHeader,
      Tab
    }
  }
</script>
 
>>>>>>> 2017/7/19
