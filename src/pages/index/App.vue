<template>
  <div id="app">
    <the-head></the-head>
    <the-menu></the-menu>
    <div class="theContent clear"> 
      <router-view></router-view>
    </div>
    <the-flink></the-flink>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHead from '../../components/TheHead.vue'
import TheMenu from '../../components/TheMenu.vue'
import TheFlink from '../../components/TheFlink.vue'
import TheFooter from '../../components/TheFooter.vue'

export default {
  components: {
    'the-head': TheHead,
    'the-menu': TheMenu,
    'the-flink': TheFlink,
    'the-footer': TheFooter,
  },
  data: function(){
    return {
    }
  },
  methods: {
  },
  created: function(){
    //默认加载主题
    window.document.documentElement.setAttribute('data-theme', 'theme')
    //测试页面是否存在token
    if(this.$store.state.Member.token){
      console.log("token："+this.$store.state.Member.token)
    }else{
      console.log("没有token！")
    }
  }
}
</script>

<style lang="scss">
#app {
  min-width: 1200px;
  overflow-x: hidden;
}
</style>
