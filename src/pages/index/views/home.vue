<template>
  <div class="home">
    <div class="fullslide-box">
      <div class="fullmsg-box">
        <the-search class="search"></the-search>
        <the-home-nav-content class="homeNavContent"></the-home-nav-content>
      </div>
      <the-fullslide></the-fullslide>
    </div>
    <!-- <div class="tab-box">
      <el-tabs v-model="tabBoxActiveName">
        <el-tab-pane label="动漫解读" name="1">
          <list-dmjd></list-dmjd>
        </el-tab-pane>
        <el-tab-pane label="最新政策" name="2">用户管理</el-tab-pane>
        <el-tab-pane label="直播解读" name="3">角色管理</el-tab-pane>
        <el-tab-pane label="文字解读" name="4">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div> -->
    <div class="homeList homeZcjd">
      <div class="homeList-box flex">
        <div class="ico-box flex-middle">
          <i class="abs iconfont icon-icon_bangzhuwendang"></i>
          <i class="iconfont icon-icon_bangzhuwendang"></i>
          <span>政策解读</span><em>Policy interpretation</em>
        </div>
        <div class="right-box"><list-dmjd></list-dmjd></div>
      </div>
    </div>
    <div class="homeList homeFcsb">
      <div class="homeList-box flex">
        <div class="ico-box flex-middle">
          <i class="abs iconfont icon-pen"></i>
          <i class="iconfont icon-pen"></i>
          <span>扶持申报</span><em>Supporting declaration</em>
        </div>
        <div class="right-box"><list-fcsb></list-fcsb></div>
      </div>
    </div>
  </div>
</template>


<script>
import TheFullslide from '../../../components/TheFullslide.vue'
import TheSearch from '../../../components/TheSearch.vue'
import TheHomeNavContent from '../../../components/TheHomeNavContent.vue'
import ListDmjd from '../../../components/ListDmjd.vue'
import ListFcsb from '../../../components/ListFcsb.vue'

export default {
  components: {
    'the-fullslide': TheFullslide,
    'the-search': TheSearch,
    'the-home-nav-content': TheHomeNavContent,
    'list-dmjd': ListDmjd,
    'list-fcsb': ListFcsb,
  },
  props: {
  },
  data: function() {
    return {
      tabBoxActiveName: '1'
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
.home {
  .fullslide-box {
    position: relative;
    width: 100%;
    height: 800px;
    .fullmsg-box {
      z-index: 2;
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -600px;
      width: 1200px;
      .search {
        z-index: 2;
        position: relative;
        margin-top: 120px;
      }
      .homeNavContent {
        margin-top: 60px;
      }
    }
  }
  .homeList {
    width: 100%;
    padding: 40px 0;
    .homeList-box {
      width: 1200px;
      margin: 0 auto;
    }
    .ico-box {
      position: relative;
      flex: 0 0 238px;
      flex-direction: column;
      margin-right: 20px;
      color: #fff;
      @include theme_bg(primary);
      i.abs {
        position: absolute;
        right: -40px;
        top: -40px;
        font-size: 160px;
        color: rgba(#fff,0.1);
      }
      i {font-size: 60px;}
      span {font-size: 20px;}
      em { font-size: $font-size-xs;}
    }
    .right-box {
      flex: 1;
    }
  }
  .homeZcjd {
    @include theme_bg(neutral-divider);
  }
  .homeFcsb {
    .ico-box {
      @include theme_bg(primary-light);
    }
  }
  .tab-box {
    width: 1200px;
    margin: 30px auto;
    .el-tabs__item {
      font-size: $font-size-lgm;
      @include theme_font(neutral);
      &:hover,&.is-active {
        font-weight: 600;
        @include theme_font(primary);
      }
    }
  }
}
</style>
