<template>
  <div class="child child-policy">
    <div class="child-banner">
      <div class="maskbg"><img src="../../../../common/images/child-banner-policy.jpg"></div>
      <div class="w-1200">
        <div class="msg-box clear">
          <div class="title">我要找政策</div>
          <div class="dot"><i class="iconfont icon-xialajiantou-down"></i></div>
          <!-- <list-search-policy></list-search-policy> -->
<!--           <div class="breadcrumb">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item>您现在的位置</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/policy' }">政策</el-breadcrumb-item>
            </el-breadcrumb>
          </div> -->
        </div>
      </div>
    </div>
    <nav class="child-nav">
      <div class="w-1200">
        <ul class="clear">
          <li><router-link to="/policy/zchb">政策汇编</router-link></li>
          <li><router-link to="/policy/sbzc">项目申报</router-link></li>
          <li><router-link to="/policy/zcjd">政策解读</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="child-box w-1200">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
// import ListSearchPolicy from '../../../../components/ListSearchPolicy'

export default {
  components: {
    // 'list-search-policy': ListSearchPolicy
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