<template>
  <div id="app" class="flex">
    <the-hd v-if="headShow"></the-hd>
<!--     <the-head v-if="headShow"></the-head>
    <the-menu v-if="menuShow"></the-menu> -->
    <div class="theContent clear"> 
      <router-view></router-view>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHd from '../../components/TheHd.vue'
import TheHead from '../../components/TheHead.vue'
import TheMenu from '../../components/TheMenu.vue'
import TheFooter from '../../components/TheFooter.vue'

export default {
  components: {
    'the-hd': TheHd,
    'the-head': TheHead,
    'the-menu': TheMenu,
    'the-footer': TheFooter,
  },
  data: function(){
    return {
      headShow: false,
      menuShow: false,
      flinkShow: false
    }
  },
  computed: {
  },
  watch: {
    $route: function(e){
      this.headShow = (e.name=='home'||e.name=='index') ? false : true
      this.menuShow = (e.name=='home'||e.name=='index') ? false : true
      this.flinkShow = (e.name=='home'||e.name=='index') ? true : false
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

<style lang="scss" scoped>
#app {
  flex-direction: column;
  min-width: 1200px;
  height: 100%;
  // overflow: hidden;
  .theContent {
    flex: auto;
    -webkit-flex: 100%;
  }
}
</style>
