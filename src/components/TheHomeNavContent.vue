<template>
  <div class="theHomeNavContent">
    <el-row :gutter="20">
      <el-col :span="10">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="ico-box flex-middle">
              <i class="iconfont icon-ceshishenqing"></i>
              <span>企业诉求<em>Enterprise-Appeal</em></span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="ico-box flex-middle">
              <i class="iconfont icon-peiwangyindao"></i>
              <span>自助咨询<em>Advice-Yourself</em></span>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <div class="imgSlide">
              <the-video></the-video>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="9">
        <div class="hot">
          <el-tabs v-model="hotActiveName">
            <el-tab-pane label="新闻咨询" name="1">adad</el-tab-pane>
            <el-tab-pane label="政声传递" name="2">政声传递</el-tab-pane>
            <el-tab-pane label="信息公告" name="3">信息公告</el-tab-pane>
            <el-tab-pane label="工作动态" name="4">工作动态</el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="ico-box flex-middle">
          <i class="iconfont icon-icon_bangzhuwendang"></i>
          <span>扶持政策<em>Support-Policy</em></span>
        </div>
        <div class="fcList">
          <el-tabs v-model="fcListActiveName">
            <el-tab-pane label="综合类" name="1">adad</el-tab-pane>
            <el-tab-pane label="产业类" name="2">用户管理</el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import TheVideo from './TheVideo.vue'

export default {
  components: {
    'the-video': TheVideo,
  },
  props: {
  },
  data: function() {
    return {
      hotActiveName: '1',
      fcListActiveName: '1',
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


<style lang="scss">
.theHomeNavContent {
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .ico-box {
    width: 100%;
    height: 100px;
    padding: 10px;
    cursor: pointer;
    background-color: #fff;
    @include shadow(0,0,10px,5px,rgba(#000,0.1));
    i {
      margin: 0 10px;
      font-size: 60px;
      @include theme_font(primary);
    }
    span {
      flex: 1;
      font-size: $font-size-lgx;
      @include theme_font(neutral-title);
      em {
        display: block;
        font-size: $font-size-xs;
        @include theme_font(neutral);
      }
    }
    &:hover {
      @include theme_bg(primary);
      i,span,span em {
        color: #fff;
      }
    }
  }
  .imgSlide {
    width: 100%;
    height: 300px;
    background-color: #fff;
  }
  .hot {
    width: 100%;
    height: 420px;
    padding: 20px;
    background-color: #fff;
    .el-tabs__item {
      font-size: $font-size-lgm;
      @include theme_font(neutral);
      &:hover,&.is-active {
        @include theme_font(primary);
      }
    }
  }
  .fcList {
    width: 100%;
    height: 320px;
    padding: 0 20px 20px 20px;
    background-color: #fff;
    .el-tabs__item {
      font-size: $font-size-lgm;
      @include theme_font(neutral);
      &:hover,&.is-active {
        @include theme_font(primary);
      }
    }
  }
  .xx {
    background-color: #fff;
  }
}
</style>