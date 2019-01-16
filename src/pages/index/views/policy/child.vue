<template>
  <div class="child child-policy">
    <!--  -->
    <el-dialog class="dialogScreening" :visible.sync="dialogVisible" width="800px">
      <the-dialog-screening></the-dialog-screening>
    </el-dialog>
    <!--  -->
    <div class="child-banner">
      <div class="maskbg"><img src="../../../../common/images/child-banner-policy.jpg"></div>
      <div class="w-1200">
        <div class="msg-box clear">
          <div class="title">政策配一配</div>
          <div class="dot"><i class="iconfont icon-xialajiantou-down"></i></div>
          <div class="zcgj">
            <button class="btn btn-lg btn-primary-sec hover" @click="dialogVisible = true">
              <i class="iconfont icon-shaixuan"></i> 政策管家
            </button>
          </div>

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
    <div class="child-box">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import TheDialogScreening from '../../../../components/TheDialogScreening'
  
// import ListSearchPolicy from '../../../../components/ListSearchPolicy'

export default {
  components: {
    // 'list-search-policy': ListSearchPolicy
    'the-dialog-screening': TheDialogScreening,
  },
  props: {
  },
  data: function() {
    return {
      dialogVisible: false,
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
.child-policy {
  .screening {
    z-index: 3;
    position: absolute;
    right: 0;
    top: -90px;
    button {
      width: 210px;
      height: 60px;
      padding: 0;
      @include radius(1000px);
      @include theme_shadow(primary-sec,0,5px,20px,0,0.5);
    }
  }
  .child-banner {
    .zcgj {
      position: absolute;
      right: 0;
      bottom: -20px;
      button {
        width: 210px;
        height: 60px;
        padding: 0;
        @include radius(1000px);
        @include theme_shadow(primary-sec,0,5px,20px,0,0.5);
      }
    }
  }
}
</style>