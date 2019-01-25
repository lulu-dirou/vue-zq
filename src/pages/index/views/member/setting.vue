<template>
  <div class="setting">
    <div class="mySetting-title"><span>设置</span></div>
    <div class="mySetting-content">
        <el-tabs v-model="activeName">
          <el-tab-pane label="修改密码" name="tab1">
            <el-row :gutter="20">
              <el-col :span="18">
                <setting-pw></setting-pw>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="企业信息设置" name="tab2">
            <setting-qy></setting-qy>
          </el-tab-pane>
          <el-tab-pane label="企业子账号管理" name="tab3">
            <setting-sn2></setting-sn2>
          </el-tab-pane>
        </el-tabs>
    </div>
  </div>
</template>


<script>
import SettingPw from '../../../../components/SettingPw'
import SettingQy from '../../../../components/SettingQy'
import SettingSn2 from '../../../../components/SettingSn2'

export default {
  components: {
    'setting-pw': SettingPw,
    'setting-qy': SettingQy,
    'setting-sn2': SettingSn2,
  },
  props: {
  },
  data: function() {
    return {
      activeName: 'tab1',
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
.setting {
  /deep/ .el-tabs {
    .el-tabs__header {
      margin-top: -120px;
      margin-bottom: 30px;
      .el-tabs__nav-wrap {
        &:after {
          display: none;
        }
        .el-tabs__nav-scroll {
          .el-tabs__nav {
            float: right;
            .el-tabs__active-bar {
              @include theme_bg(primary);
            }
            .el-tabs__item {
              height: 90px;
              line-height: 90px;
              font-size: $font-size-df;
              &:hover,&.is-active {
                @include theme_font(primary);
              }
            }
          }
        }
      }
    }
    .el-tabs__content {
      padding-bottom: 10px;
    }
  }
}
</style>