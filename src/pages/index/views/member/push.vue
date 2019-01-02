<template>
  <div class="push">
    <div class="mySetting-title"><span>推送</span></div>
    <el-tabs v-model="pushName" class="tabs">
      <el-tab-pane label="政策推送" name="0">
        <my-push :paginationShow="true"></my-push>
      </el-tab-pane>
      <el-tab-pane label="我的诉求" name="1">
        22
      </el-tab-pane>
      <el-tab-pane label="我的申报" name="2">
        333
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import MyPush from '../../../../components/MyPush'

export default {
  components: {
    'my-push': MyPush,
  },
  props: {
  },
  data: function() {
    return {
      pushName: '0'
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
.push {
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