<template>
  <div class="fav">
    <div class="mySetting-title"><span>收藏夹</span></div>
    <el-tabs v-model="favName" class="tabs">
      <el-tab-pane label="政策收藏" name="0">
        <my-fav-zc :paginationShow="true"></my-fav-zc>
      </el-tab-pane>
      <el-tab-pane label="解读收藏" name="1">
        <list-my-sb></list-my-sb>
      </el-tab-pane>
      <el-tab-pane label="申报收藏" name="2">
        <list-my-sb></list-my-sb>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import MyFavZc from '../../../../components/MyFavZc'
import ListMySb from '../../../../components/ListMySb'

export default {
  components: {
    'my-fav-zc': MyFavZc,
    'list-my-sb': ListMySb,
  },
  props: {
  },
  data: function() {
    return {
      favName: '0',
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
.fav {
  .tabs {
      /deep/ .el-tabs__nav {
      margin-right: 20px;
      float: right;
      .el-tabs__active-bar {
        height: 4px;
      }
      .el-tabs__item {
        height: 50px;
        line-height: 50px;
        @include theme_font(neutral,0.6);
        &.is-active {
          @include theme_font(primary);
        }
      }
    }
    /deep/ .el-tabs__content {
      .listMini tr td {
        font-size: $font-size-df;
      }
      .listMini tr td.mini-time {
        font-size: $font-size-xs;
      }
    }
  }
}
</style>