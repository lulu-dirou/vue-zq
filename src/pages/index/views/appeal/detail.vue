<template>
  <div class="single appealDetail clear">
    <div class="navBar">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/appeal' }">诉求</el-breadcrumb-item>
        <el-breadcrumb-item>诉求明细</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!--  -->
    <div class="single-box clear">
      <div class="title-box"><div class="title"><span><em>广东奥博信息产业股份有限公司的税赋诉求</em></span></div></div>
      <div class="msg-box">
        
        <section class="state-box flex">
          <div class="state"><button class="btn btn-disabled">已办结</button></div>
          <div class="time">总耗时：<b class="font-warning">1</b>天</div>
          <div class="chat"><button class="btn btn-primary-light">查看互动(0)</button></div>
        </section>

        <section class="cd-container">
          <div class="cd-timeline-block clear">
            <div class="cd-timeline-img cd-icoleft"><i class="iconfont icon-comment-dots"></i></div>
            <div class="cd-timeline-content clear">
              <h2>广东奥博</h2>
              <p>请推荐相应的融资中介机构与我方进行对接，谢谢</p>
              <span class="cd-date">2019-01-06</span>
            </div>
          </div>
          <div class="cd-timeline-block right clear">
            <div class="cd-timeline-img cd-icoright"><i class="iconfont icon-dui"></i></div>
            <div class="cd-timeline-content clear">
              <h2>区人才办</h2>
              <p>已安排</p>
              <span class="cd-date">2019-12-25</span>
            </div>
          </div>
          <div class="cd-timeline-block right clear">
            <div class="cd-timeline-img cd-icoright"><i class="iconfont icon-dui"></i></div>
            <div class="cd-timeline-content clear">
              <h2>区人才办</h2>
              <p>已安排</p>
              <span class="cd-date">2019-12-25</span>
            </div>
          </div>
          <div class="cd-timeline-block clear">
            <div class="cd-timeline-img cd-icoleft"><i class="iconfont icon-comment-dots"></i></div>
            <div class="cd-timeline-content clear">
              <h2>广东奥博</h2>
              <p>请推荐相应的融资中介机构与我方进行对接，谢谢</p>
              <span class="cd-date">2019-01-06</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>


<script>
export default {
  components: {
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
.appealDetail {
  .single-box {
    .title-box {
      .title {
        width: 1200px;
        text-align: center;
      }
    }
    .msg-box {
      width: 1200px;
    }
  }
}
.cd-container {
  position: relative;
  padding: 30px 0;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 18px;
    height: 100%;
    width: 4px;
    @include theme_bg(neutral-divider);
  }
  .cd-timeline-block {
    position: relative;
    margin: 20px 0;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
    .cd-timeline-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
      box-shadow: 0 0 0 4px white, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
      color: #fff;
      i { font-size: 24px; }
      &.cd-icoleft { @include theme_bg(primary); }
      &.cd-icoright { @include theme_bg(success); }
    }
    .cd-timeline-content {
      position: relative;
      margin-left: 60px;
      padding: 10px;
      @include radius(5px);
      @include theme_bg(neutral-divider);
      &:before {
        content: '';
        position: absolute;
        top: 16px;
        right: 100%;
        @include arrow(left,7px,#E8EAEC);
      }
      h2 {
        font-size: $font-size-lgm;
        font-weight: normal;
        @include theme_font(primary);
      }
      p {
        margin: 10px 0;
      }
      .cd-date {
        float: left;
        font-size: $font-size-xs;
        @include theme_font(neutral,0.6);
      }
    }
  }
}


@media only screen and (min-width: 1200px) {
  .cd-container {
    &:before {
      left: 50%;
      margin-left: -2px;
    }
    .cd-timeline-block {
      margin: 30px 0;
      .cd-timeline-img {
        width: 60px;
        height: 60px;
        line-height: 60px;
        left: 50%;
        margin-left: -30px;
        text-align: center;
      }
      .cd-timeline-content {
        margin-left: 0;
        width: 45%;
        &:before {
          left: 100%;
          @include arrow(right,7px,#E8EAEC);
        }
        .cd-date {
          position: absolute;
          width: 100%;
          left: 122%;
          top: 24px;
        }
      }
    }
    .cd-timeline-block.right {
      .cd-timeline-content {
        float: right;
        &:before {
          left: auto;
          right: 100%;
          @include arrow(left,7px,#E8EAEC);
        }
        .cd-date {
          left: auto;
          right: 122%;
          text-align: right;
        }
      }
    }
  }
}
</style>