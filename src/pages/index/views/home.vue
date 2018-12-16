<template>
  <div class="home">
    <div class="fullslide-box">
      <div class="msg-box">
        <the-search class="search"></the-search>
        <the-home-nav-content class="homeNavContent"></the-home-nav-content>
      </div>
      <the-fullslide></the-fullslide>
    </div>
    <div class="tab-box">
      <el-tabs v-model="tabBoxActiveName">
        <el-tab-pane label="动漫解读" name="1">
          <list-dmjd></list-dmjd>
        </el-tab-pane>
        <el-tab-pane label="最新政策" name="2">用户管理</el-tab-pane>
        <el-tab-pane label="直播解读" name="3">角色管理</el-tab-pane>
        <el-tab-pane label="文字解读" name="4">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>


<script>
import TheFullslide from '../../../components/TheFullslide.vue'
import TheSearch from '../../../components/TheSearch.vue'
import TheHomeNavContent from '../../../components/TheHomeNavContent.vue'
import ListDmjd from '../../../components/ListDmjd.vue'

export default {
  components: {
    'the-fullslide': TheFullslide,
    'the-search': TheSearch,
    'the-home-nav-content': TheHomeNavContent,
    'list-dmjd': ListDmjd,
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
    .msg-box {
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
      .homeNav {
        z-index: 2;
        position: relative;
        margin-top: 100px;
      }
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
