<template>
  <div class="child policy">



<!--     <div class="msg-box clear">
      <div class="title">121212</div>
      <div class="dot"><i class="iconfont icon-xialajiantou-down"></i></div>
    </div>
    <div class="maskbg">
      <img src="">
    </div> -->
    <div class="child-banner">
      <div class="maskbg"><img src="../../../../common/images/child-banner-policy.jpg"></div>
      <div class="w-1200">


        <div class="msg-box clear">
          <div class="title">我要找政策</div>
          <div class="dot"><i class="iconfont icon-xialajiantou-down"></i></div>
        </div>


        <!-- <list-search-policy></list-search-policy>
        <nav>
          <ul class="flex-middle">
            <li><router-link to="/policy/zchb">政策汇编</router-link></li>
            <li><router-link to="/policy/sbzc">申报政策</router-link></li>
            <li><router-link to="/policy/zcjd">政策解读</router-link></li>
            <li><router-link to="/policy/zcdy">政策订阅</router-link></li>
          </ul>
        </nav> -->
      </div>
    </div>


    <div class="navBar">
      <div class="w-1200 flex">
        <i class="iconfont icon-periscope icohome"></i>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/policy' }">政策</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="child-box w-1200">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import ListSearchPolicy from '../../../../components/ListSearchPolicy'

export default {
  components: {
    'list-search-policy': ListSearchPolicy
  },
  props: {
  },
  data: function() {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
  },
  created: function(){
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
</style>