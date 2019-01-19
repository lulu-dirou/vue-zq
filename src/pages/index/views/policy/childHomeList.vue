<template>
  <div class="child child-home-list">
    <div class="maskbg"></div>
    <div class="box">
      <div class="top">
        <h1>政企管家</h1>
        <p>智能政策推荐报告</p>
      </div>
      <div class="content clear">
        <!------------------------------------------------------------------------------------------- el-tabs -->
        <el-tabs class="tabs" v-model="activeName">
          <el-tab-pane name="tab1">
            <div class="tab-header" slot="label"><div class="dot"><i class="iconfont icon-xialajiantou-down"></i></div>已推荐政策（1）</div>
            <div class="tab-content">
              <list-zcgj-yes></list-zcgj-yes>
            </div>
          </el-tab-pane>
          <el-tab-pane  name="tab2">
            <div class="tab-header" slot="label"><div class="dot"><i class="iconfont icon-xialajiantou-down"></i></div>或与您相关政策（28）</div>
            <div class="tab-content">2</div>
          </el-tab-pane>
          <el-tab-pane name="tab3">
            <div class="tab-header" slot="label"><div class="dot"><i class="iconfont icon-xialajiantou-down"></i></div>暂不符合政策（5）</div>
            <div class="tab-content">3</div>
          </el-tab-pane>
        </el-tabs>
        <!------------------------------------------------------------------------------------------- end -->
      </div>
    </div>
  </div>
</template>


<script>
import ListZcgjYes from '../../../../components/ListZcgjYes'

export default {
  components: {
    'list-zcgj-yes': ListZcgjYes
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
.child-home-list {
  position: relative;
  background-color: transparent;
  .maskbg {
    z-index: -1;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin-top: -150px;
    background: url("../../../../common/images/policy-zt3.jpg") center 0 no-repeat;
    background-size: cover;
  }
  .box {
    z-index: 2;
    position: relative;
    width: 1200px;
    padding: 40px 0 80px 0;
    margin: 0 auto;
    .top {
      margin-bottom: 50px;
      color: #fff;
      text-align: center;
      h1 { font-size: 50px; }
      p {font-size: 30px; }
    }
    .content {
      /deep/ .el-tabs {
        .el-tabs__header {
          margin-bottom: 50px;
          @include theme_bg(primary);
          .el-tabs__nav-wrap {
            overflow: visible;
            &:after {
              display: none;
            }
            .el-tabs__nav-scroll {
              overflow: visible;
            }
          }
          .el-tabs__nav {
            float: none;
            .el-tabs__active-bar {
              display: none;
            }
            .el-tabs__item {
              width: 400px;
              height: 60px;
              line-height: 60px;
              text-align: center;
              font-size: $font-size-lg;
              color: #fff;
              &.is-active {
                @include theme_bg(primary-sec);
              }
            }
          }
        }
      }
      .tabs {
        .tab-header {
          position: relative;
          .dot {
            position: absolute;
            left: 50%;
            bottom: -40px;
            margin-left: -20px;
            width: 40px;
            height: 40px;
            line-height: 40px;
            background-color: #fff;
            @include radius(100%);
            @include opacity(0);
            @include transition(0.2s);
            i {
              font-size: 24px;
              @include theme_font(primary-sec);
              @include theme_text_shadow(primary-sec,1px,3px,15px,1);
            }
          }
        }
        .is-active .tab-header {
          .dot {
            bottom: -30px;
            @include opacity(1);
          }
        }
      }
    }
  }


}
</style>