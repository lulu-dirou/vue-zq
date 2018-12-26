<template>
  <div class="child policy">
    <div class="child-banner">
      <div class="w-1200">
        <list-search-declare></list-search-declare>
        <nav>
          <ul class="flex-middle">
            <li><router-link to="/declare/sbtz">看通知</router-link></li>
            <li><router-link to="/declare/sbzc">读政策</router-link></li>
            <li><router-link to="/declare/sbxm">报项目</router-link></li>
            <li><router-link to="/declare/sbjd">查进度</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="navBar">
      <div class="w-1200 flex">
        <i class="iconfont icon-periscope icohome"></i>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/declare' }">申报</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="child-box w-1200">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import ListSearchDeclare from '../../../../components/ListSearchDeclare'

export default {
  components: {
    'list-search-declare': ListSearchDeclare
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